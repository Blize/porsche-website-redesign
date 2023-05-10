import { useRouter } from "next/router";
import { cars } from "../../../lib/cars";
import { useEffect, useState } from "react";
import style from "../../styles/detailedCar.module.css";
import Button from "@/components/Button/Button";

export default function popUpPage() {
  const [currentCar, setCurrentCar] = useState(null);

  const router = useRouter();
  const id = router.query.id;
  console.log(currentCar, id);

  useEffect(() => {
    if (id !== undefined) {
      setCurrentCar(cars.filter((car) => car.id === +id)[0]);
    }
  }, [id]);

  return (
    <>
      {currentCar && (
        <div className={style.container}>
          <h1 className={style.title}>{currentCar.title}</h1>
          <div className={style.innerContainer}>
            <img
              src={"/cars/shop/" + currentCar.src + ".jpg"}
              width="1320"
              height="780"
              className={style.img}
            />
            <p className={style.description}>
              {currentCar.detailedDescription}
            </p>
            <div className={style.buttonGroup}>
              <Button
                text="Back"
                onClickHandler={(e) => router.push("/shop")}
              />
              <Button
                text={`Buy for ${currentCar.price} CHF`}
                onClickHandler={(e) => alert("You broke now!")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
