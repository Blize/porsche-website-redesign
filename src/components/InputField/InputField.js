import style from "./InputField.module.css";

export default function InputField({
  type,
  value,
  onChangeHandler,
  className,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={style.input + " " + className}
    />
  );
}
