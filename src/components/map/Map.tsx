import style from "./Map.module.scss";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {CarType} from "../../services/CarsService.ts";
import {memo} from "react";

type TMapProps = {
  cars: CarType[]
}

export const MapComponent = memo((props: TMapProps) => {
  const {cars} = props;

  return (
    <div className={style.map}>
      <YMaps>
        <Map width={"80%"} height={400}
             defaultState={{center: [59.94, 30.09], zoom: 9, controls: ["zoomControl", "fullscreenControl"]}}
             modules={["control.ZoomControl", "control.FullscreenControl"]}>
          {cars.map((carData) => <Placemark key={carData.id}
                                            geometry={[carData.latitude, carData.longitude]}
                                            modules={["geoObject.addon.balloon"]}
                                            properties={{
                                              balloonContentBody: `${carData.name} ${carData.model} - $${carData.price}`
                                            }}/>)}
        </Map>
      </YMaps>
    </div>
  )
})