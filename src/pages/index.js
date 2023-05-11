import styles from "@/styles/index.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/about");
    }, 4000);
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.car}>
          <h1 className={styles.title}>Welcome to Porsche</h1>
        </div>
      </div>
    </>
  );
}
