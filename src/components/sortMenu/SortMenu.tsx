import {memo, useState} from "react";
import style from "./SortMenu.module.scss"
import {ESortField, ESortingDirection} from "../../utils/SortingUtils.ts";

type TSortMenuProps = {
  sortCars: (sortField: ESortField, sortingDirection: ESortingDirection) => void
}

export const SortMenu = memo((props: TSortMenuProps) => {
  const {sortCars} = props;
  const [sortField, setSortField] = useState<ESortField>(ESortField.year);
  const [sortingDirection, setSortingDirection] = useState<ESortingDirection>(ESortingDirection.asc);

  const handleSortCars = () => {
    sortCars(sortField, sortingDirection);
  }

  const handleSortFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value as ESortField)
  }

  const handleSortingDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingDirection(Number(e.target.value))
  }

  return (
    <div className={style.sort_menu}>
      <select value={sortField} onChange={(e) => handleSortFieldChange(e)}>
        <option value={ESortField.year}>Year</option>
        <option value={ESortField.price}>Price</option>
      </select>
      <select value={sortingDirection}
              onChange={(e) => handleSortingDirectionChange(e)}>
        <option value={ESortingDirection.asc}>Asc</option>
        <option value={ESortingDirection.dsc}>Dsc</option>
      </select>
      <button onClick={() => handleSortCars()}>Sort</button>
    </div>
  )
})