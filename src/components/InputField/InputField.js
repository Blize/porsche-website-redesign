import style from "./InputField.module.css";

export default function InputField({
  type,
  value,
  onChangeHandler,
  className,
  placeHolderValue,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeHolderValue}
      className={style.input + " " + className}
    />
  );
}
