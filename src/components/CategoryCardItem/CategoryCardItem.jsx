import { dataCategory } from "../data";
import { NavLink } from "react-router-dom";
import style from "./CategoryCardItem.module.css";
export function CategoryCardItem() {
  return (
    <>
      <div className={style.cardWrapper}>
        {dataCategory.map((category) => {
          return (
            <NavLink key={category.id_cat} to={`/product/${category.id_cat}`}>
              <div className={style.categoryCard}>
                <img src={category.img} alt="" />
                <p>{category.name}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
