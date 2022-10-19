import BigArticle from "../../articles/BigArticle";
import SmallArticle from "../../articles/SmallArticle";
import styles from "./AktualneDianie.module.scss";

function AktualneDianie() {
  return (
    <div className={styles["agendy"]}>
      <div className={styles["agendy-col"]}>
        <h1>Najnovšie</h1>
        <BigArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/10/08/09/19/winter-7506621__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504819__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
      </div>
      <div className={styles["agendy-col"]}>
        <h1>Najčítanejšie</h1>
        <BigArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/09/04/12/24/hippos-7431581__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/09/08/10/19/eye-7440640__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/10/10/04/23/rottweiler-7510724__340.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
      </div>
      <div className={styles["agendy-col"]}>
        <h1>Do pozornosti</h1>
        <BigArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/10/09/20/16/globe-7510104__340.jpg"
          }
          title={"Colníci zaistili 60 pávích pierok, "}
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2022/10/07/09/24/little-panda-7504633__340.jpg"
          }
          title={"Chýbali im doklady potrebné na dovoz"}
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615901__340.jpg"
          }
          title={"Papagajos"}
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
      </div>
    </div>
  );
}

export default AktualneDianie;
