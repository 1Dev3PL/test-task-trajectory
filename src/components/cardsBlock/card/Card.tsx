import {CarType} from "../../../services/CarsService.ts";
import style from "./Card.module.scss"
import React, {memo, useState} from "react";

type TCardProps = {
  carData: CarType
  editCar: (carId: number, name: string, model: string, price: number) => void
  deleteCar: (carId: number) => void
}

export const Card = memo((props: TCardProps) => {
  const {
    carData,
    editCar,
    deleteCar
  } = props;

  const [isEditMode, setIsEditMode] = useState(false);
  const [nameValue, setNameValue] = useState(carData.name);
  const [modelValue, setModelValue] = useState(carData.model);
  const [priceValue, setPriceValue] = useState(carData.price);

  const handleNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value)
  }

  const handleModelValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelValue(e.currentTarget.value)
  }

  const handlePriceValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(Number(e.currentTarget.value))
  }

  const handleSwitchEditMode = () => {
    if (isEditMode) {
      editCar(carData.id, nameValue, modelValue, priceValue)
      setIsEditMode(false);
    } else {
      setIsEditMode(true)
    }
  }

  const handleDeleteCard = () => {
    deleteCar(carData.id);
  }

  return (
    <div className={style.card}>
      <div className={style.description_block}>
        {isEditMode
          ? <>
            <input value={nameValue} placeholder={"Name"} onChange={(e) => handleNameValueChange(e)}/>
            <input value={modelValue} placeholder={"Model"} onChange={(e) => handleModelValueChange(e)}/>
          </>
          : <>
            <div>Name: <span className={style.name}>{carData.name}</span></div>
            <div>Model: <span className={style.model}>{carData.model}</span></div>
          </>
        }
        <div>Year: {carData.year}</div>
        <div className={style.color_field}>
          Color: {carData.color}
          <div className={style.color_box} style={{backgroundColor: carData.color}}/>
        </div>
        {isEditMode
          ? <>
            <input type={"number"} value={priceValue} placeholder={"Price"}
                   onChange={(e) => handlePriceValueChange(e)}/>
          </>
          : <>
            <div>Price: ${carData.price}</div>
          </>
        }
        <div>Latitude: {carData.latitude}</div>
        <div>Longitude: {carData.longitude}</div>
      </div>
      <div className={style.buttons_block}>
        <button className={style.button} onClick={() => handleSwitchEditMode()}>{isEditMode ? "Save" : "Edit"}</button>
        <button className={style.delete_button} onClick={() => handleDeleteCard()}>Delete</button>
      </div>
    </div>
  )
})