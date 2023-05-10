import Navigation from "@/components/Navigator/Navigator";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Welcome to Porsche</h1>
        <div className={styles.car}></div>
        <Navigation
          href="/about"
          name="Learn more about us..."
          className={styles.link}
        />
      </div>
    </>
  );
}
