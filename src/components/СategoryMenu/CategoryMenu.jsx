import { NavLink } from 'react-router-dom';
import { dataCategory } from '../data';
export function CategoryMenu() {
  return (
    <>
      {dataCategory.map((cetegory) => {
        return (
          <NavLink to={`/product/${cetegory.id_cat}`} key={cetegory.id_cat}>
            {cetegory.name}
          </NavLink>
        );
      })}
    </>
  );
}
