import BigArticle from "../../../articles/BigArticle";
import SmallArticle from "../../../articles/SmallArticle";
import styles from "./Agendy.module.scss";

function Agendy() {
  return (
    <div className={styles["agendy"]}>
      <div className={styles["agendy-col"]}>
        <h1>Najnovšie</h1>
        <BigArticle
          imgUrl={
            "https://data.tvkosice.sk/images/fs/56/cf/06/31/45/26/ca/14/19/d7/1a/e8/56cf06314526ca1419d71ae8/videos/2017/6/6/534fb047-9ea8-4f6b-9028-37b3e782dbf1_image_5.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={"https://trnavske.radio/data/images/22191.jpg"}
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://www.enviroportal.sk/uploads/files/Sprava_ZP/horniny/mapy%202020/lokaliy%20svah_deform_2020"
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
            "https://data.tvkosice.sk/images/fs/56/cf/06/31/45/26/ca/14/19/d7/1a/e8/56cf06314526ca1419d71ae8/videos/2017/6/6/534fb047-9ea8-4f6b-9028-37b3e782dbf1_image_5.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={"https://trnavske.radio/data/images/22191.jpg"}
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://www.enviroportal.sk/uploads/files/Sprava_ZP/horniny/mapy%202020/lokaliy%20svah_deform_2020"
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
            "https://data.tvkosice.sk/images/fs/56/cf/06/31/45/26/ca/14/19/d7/1a/e8/56cf06314526ca1419d71ae8/videos/2017/6/6/534fb047-9ea8-4f6b-9028-37b3e782dbf1_image_5.jpg"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={"https://trnavske.radio/data/images/22191.jpg"}
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
        <SmallArticle
          imgUrl={
            "https://www.enviroportal.sk/uploads/files/Sprava_ZP/horniny/mapy%202020/lokaliy%20svah_deform_2020"
          }
          title={
            "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
          }
          datum={"1.7.2020 "}
          kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
        />
      </div>
    </div>
  );
}

export default Agendy;
