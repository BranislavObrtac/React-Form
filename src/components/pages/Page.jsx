import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPage, pageData, pageDataIsSuccess } from "../../store/pageSlice";
import styles from "./Page.module.scss";
//page imports
import HomePage from "./homepage/HomePage";
import PageHeader from "../pageblocks/PageHeader";
import PageBlockLeft from "../pageblocks/PageBlockLeft";
import PageBlockCenter from "../pageblocks/PageBlockCenter";
import PageBlockRight from "../pageblocks/PageBlockRight";

function Page() {
  const [loadingPage, setLoadingPage] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  const fetchPageDataIsSuccess = useSelector(pageDataIsSuccess);
  const data = useSelector(pageData);

  useEffect(() => {
    if (location.pathname === "/") {
      setLoadingPage(false);
      return;
    } else {
      setLoadingPage(true);
      const urlWithoutSlash = location.pathname.substring(1);
      dispatch(getPage(urlWithoutSlash));
      setLoadingPage(false);
    }
    return () => {
      setLoadingPage(true);
    };
  }, [location, dispatch]);

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : fetchPageDataIsSuccess ? (
        <>
          {data.name ? <PageHeader title={data.name} /> : null}
          <div className={styles["page-blocks"]}>
            {data.block[0] ? <PageBlockLeft data={data.block[0]} /> : null}
            {data.block[1] ? <PageBlockCenter data={data.block[1]} /> : null}
            {data.block[2] ? <PageBlockRight data={data.block[2]} /> : null}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Page;
