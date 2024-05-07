import {useCallback, useEffect, useState} from 'react'
import {CarsService, CarType} from "../services/CarsService.ts";
import {SortMenu} from "./sortMenu/SortMenu.tsx";
import {MapComponent} from "./map/Map.tsx";
import {ESortField, ESortingDirection, sortCarsByField} from "../utils/SortingUtils.ts";
import {CardsBlock} from "./cardsBlock/CardsBlock.tsx";

function App() {
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    const fetchCarsData = async () => {
      return await CarsService.fetchCarsData();
    }

    fetchCarsData().then(carsData => setCars(carsData));
  }, []);

  const editCar = useCallback((carId: number, name: string, model: string, price: number) => {
    setCars(cars => cars.map(car => car.id === carId ? {...car, name, model, price} : car))
  }, [])

  const deleteCar = useCallback((carId: number) => {
    setCars(cars => cars.filter(car => car.id != carId))
  }, [])

  const sortCars = useCallback((sortField: ESortField, sortingDirection: ESortingDirection) => {
    setCars(cars => sortCarsByField(cars, sortField, sortingDirection))
  }, [])

  return (
    <>
      {cars.length
        ? <>
          <MapComponent cars={cars}/>
          <SortMenu sortCars={sortCars}/>
          <CardsBlock cars={cars} editCar={editCar} deleteCar={deleteCar}/>
        </>
        : <div>Loading...</div>}
    </>
  )
}

export default App
