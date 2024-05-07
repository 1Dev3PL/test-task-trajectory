import style from "./CardsBlock.module.scss";
import {Card} from "./card/Card.tsx";
import {CarType} from "../../services/CarsService.ts";

type TCardsBlockProps = {
  cars: CarType[]
  editCar: (carId: number, name: string, model: string, price: number) => void
  deleteCar: (carId: number) => void
}

export const CardsBlock = (props: TCardsBlockProps) => {
  const {cars, editCar, deleteCar} = props;

  return (
    <div className={style.cards_block}>
      {cars.map((carData) => <Card key={carData.id} carData={carData} editCar={editCar}
                                   deleteCar={deleteCar}/>)}
    </div>
  )
}