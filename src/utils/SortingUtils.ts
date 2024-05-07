import {CarType} from "../services/CarsService.ts";

export enum ESortField {
  year = "year",
  price = "price"
}

export enum ESortingDirection {
  asc = 1,
  dsc = -1
}

export const sortCarsByField = (cars: CarType[], sortField: ESortField, sortingDirection: ESortingDirection) => {
  return [...cars].sort((a, b) => (a[sortField] - b[sortField]) * sortingDirection)
}