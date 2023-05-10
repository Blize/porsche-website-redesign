import style from "./Button.module.css";

export default function Button({ text, onClickHandler }) {
  return (
    <button className={style.button} onClick={onClickHandler}>
      {text}
    </button>
  );
}
