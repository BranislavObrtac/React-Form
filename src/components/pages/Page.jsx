import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getPage,
  pageData,
  pageDataIsSuccess,
  pageLeftData,
  pageCenterData,
  pageRightData,
} from "../../store/pageSlice";
import styles from "./Page.module.scss";
//page imports
import HomePage from "./homepage/HomePage";
import PageHeader from "../pageblocks/PageHeader";
import PageBlockLeft from "../pageblocks/PageBlockLeft";
import PageBlockCenter from "../pageblocks/PageBlockCenter";
import PageBlockRight from "../pageblocks/PageBlockRight";

function Page() {
  const dispatch = useDispatch();
  const location = useLocation();

  const fetchPageDataIsSuccess = useSelector(pageDataIsSuccess);
  const data = useSelector(pageData);
  const dataLeftPage = useSelector(pageLeftData);
  const dataCenterPage = useSelector(pageCenterData);
  const dataRightPage = useSelector(pageRightData);

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    } else {
      const urlWithoutSlash = location.pathname.substring(1);
      dispatch(getPage(urlWithoutSlash));
    }
    return () => {};
  }, [location, dispatch]);

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : fetchPageDataIsSuccess ? (
        <>
          {data.name ? <PageHeader title={data.name} /> : null}
          <div className={styles["page-blocks"]}>
            <PageBlockLeft data={dataLeftPage} />
            <PageBlockCenter data={dataCenterPage} />
            <PageBlockRight data={dataRightPage} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default Page;
