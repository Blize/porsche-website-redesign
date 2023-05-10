import CarCard from "@/components/CarCard/CarCard";
import styles from "../../styles/shop.module.css";
import { cars } from "../../../lib/cars";
import InputField from "@/components/InputField/InputField";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function shop() {
  const [inputValue, setInputValue] = useState("");
  const [filteredCarList, setFilteredCarList] = useState(cars);

  const router = useRouter();

  useEffect(() => {
    if (inputValue === "") {
      setFilteredCarList(cars);
    } else {
      setFilteredCarList(cars.filter((car) => car.title.includes(inputValue)));
    }
  }, [inputValue]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop</h1>
      <InputField
        type="text"
        onChangeHandler={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={styles.input}
      />
      <div className={styles.cars}>
        {filteredCarList.map((car) => (
          <CarCard
            onClickHandler={(e) => router.push(`/shop/${car.id}`)}
            key={car.id}
            title={car.title}
            description={car.description}
            price={car.price}
            src={car.src}
          />
        ))}
      </div>
    </div>
  );
}
