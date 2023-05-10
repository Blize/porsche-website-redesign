import styles from "./CarCard.module.css";

export default function CarCard({
  title,
  description,
  price,
  src,
  onClickHandler,
}) {
  return (
    <div>
      <img
        onClick={onClickHandler}
        src={"/cars/shop/" + src + ".jpg"}
        width="475"
        height="275"
        className={styles.img}
      />
      <h2>{title}</h2>
      <p>
        {description} - {price}
      </p>
    </div>
  );
}
