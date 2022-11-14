import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";

import HpSearch from "../homepage/HpSearch";
import styles from "./Odpady.module.scss";
import SmallArticle from "../../articles/ArticleSmall";
import ArticlePromo from "../../articles/ArticlePromo";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import PopularnyObsahBtn from "../../articles/PopularnyObsahBtn";
import { allSearchData } from "../../../store/searchSlice";
import renderHTML from "../../../helpers/renderHTML";

//redux
import {
  getPage,
  getSideMenu,
  odpadyPageData,
  odpadyIsSuccess,
  odpadySideMenuId,
  odpadySideMenu,
  odpadyIsSideMenuSuccess,
} from "../../../store/temyPageStore/odpadySlice";
import { mainMenuSubmenuObject } from "../../../store/mainMenuSlice";

function Odpady() {
  const odpadyObject = useSelector(mainMenuSubmenuObject);
  const pageData = useSelector(odpadyPageData);
  const searchData = useSelector(allSearchData);
  const isSuccess = useSelector(odpadyIsSuccess);
  const sideMenuId = useSelector(odpadySideMenuId);
  const sideMenu = useSelector(odpadySideMenu);
  const isSideMenuSuccess = useSelector(odpadyIsSideMenuSuccess);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (odpadyObject.linkTypeId) {
      dispatch(getPage(odpadyObject.linkTypeId));
    }
  }, [odpadyObject, dispatch]);

  useEffect(() => {
    if (isSuccess && sideMenuId) {
      dispatch(getSideMenu(sideMenuId));
    }
  }, [isSuccess, sideMenuId, dispatch]);

  const onEnterPressed = (event, state, to) => {
    if (event.key === "Enter") {
      navigate(to, { state: state });
    }
  };

  return (
    <section className={styles["odpady"]}>
      <h1>
        <span className={styles["odpady-nadpis-od"]}>Od</span>pady
      </h1>
      <div className={styles["odpady-bg-image"]}></div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["odpady-content"]}>
          <aside className={styles["odpady-aside"]}>
            <div className={styles["wrapper-aside-search"]}>
              <HpSearch
                searchMobileMenu={"combobox-input-mobile"}
                data={searchData}
              />
            </div>
            <Tab.Group as={"nav"}>
              <Tab.Panels className={styles["tab-list"]}>
                {isSideMenuSuccess && sideMenu ? (
                  Object.keys(sideMenu.children).map((key) => {
                    let menuItem = sideMenu.children[key];
                    return (
                      <Tab
                        onKeyDown={(event) =>
                          onEnterPressed(
                            event,
                            menuItem.node.name,
                            menuItem.node.link
                          )
                        }
                        className={styles["tab-list-link"]}
                        as={NavLink}
                        to={menuItem.node.link}
                        key={menuItem.node.id}
                      >
                        {menuItem.node.name}
                      </Tab>
                    );
                  })
                ) : (
                  <div>Načítavam...</div>
                )}
              </Tab.Panels>
            </Tab.Group>
          </aside>
          <section className={styles["odpady-right"]}>
            <>
              <Breadcrumbs title={"Odpady"} titleUrl={"/odpady"} />
              <main className={styles["odpady-main"]}>
                {pageData.content ? (
                  renderHTML(pageData.content)
                ) : (
                  <div>Načítavam...</div>
                )}
              </main>
            </>
            <div className={styles["bottom-section"]}>
              <section className={styles["bottom-section-do-pozornosti"]}>
                <h2>Do pozornosti</h2>
                <hr />
                <div
                  className={styles["bottom-section-do-pozornosti-articles"]}
                >
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <ArticlePromo
                    title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                  />
                </div>
              </section>
              <section className={styles["bottom-section-popularny-obsah"]}>
                <h2>Populárny obsah</h2>
                <hr />
                <div className={styles["bottom-section-popularny-obsah-btn"]}>
                  <PopularnyObsahBtn title={"ISOH"} />
                  <PopularnyObsahBtn title={"Vybrané indikátory "} />
                  <PopularnyObsahBtn title={"Zelená linka"} />
                  <PopularnyObsahBtn title={"Ewobox- vzdelávanie "} />
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Odpady;
