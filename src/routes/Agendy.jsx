import styles from "./Agendy.module.scss";

function Agendy(props) {
  return (
    <div className={styles.content}>
      <h1>Agendy</h1>
      <input aria-label="Hľadať v agendach" />
    </div>
  );
}

export default Agendy;
