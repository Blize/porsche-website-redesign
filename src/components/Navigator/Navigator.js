import Link from "next/link";
import styles from "./Navigator.module.css";

export default function Navigation({ href, name, className }) {
  return (
    <Link href={href} className={styles.link + " " + className}>
      {name}
    </Link>
  );
}
