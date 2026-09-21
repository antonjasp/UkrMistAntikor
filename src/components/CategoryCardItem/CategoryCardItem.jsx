import { dataCategory } from '../data';
import { NavLink } from 'react-router-dom';
import style from './CategoryCardItem.module.css';
export function CategoryCardItem() {
  return (
    <>
      {dataCategory.map((category) => {
        return (
          <NavLink to={`/product/${category.id_cat}`}>
            <div key={category.id_cat} className={style.categoryCard}>
              <img src={category.img} alt="" />
              <p href="">{category.name}</p>
            </div>
          </NavLink>
        );
      })}
    </>
  );
}
