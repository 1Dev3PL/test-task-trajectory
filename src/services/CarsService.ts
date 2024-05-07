import {instance} from "../api.config.ts";

export type CarType = {
  id: number
  name: string
  model: string
  year: number
  color: string
  price: number
  latitude: number
  longitude: number
}

export const CarsService = {
  async fetchCarsData(): Promise<CarType[]> {
    return await instance.get("/vehicles").then(res => res.data)
  }
}