import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <button className={styles.button}>빨간색</button>
      {progress.brower && <button className={styles.button2}>초록색</button>}
      <button className={styles.button3}>노란색</button>
    </>
  );
}
