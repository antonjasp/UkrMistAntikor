import { NavLink, useParams } from 'react-router-dom';
import style from './CardItem.module.css';
import { dataEquipment } from '../data';
export function CardItem() {
  const { categoryId } = useParams();
  const selectedProduct = categoryId
    ? dataEquipment.filter((item) => String(item.id_cat) === categoryId)
    : null;

  return (
    <>
      <div className={style.CardItemWrapper}>
        {selectedProduct.map((item) => {
          return (
            <div className={style.cardItem} key={item.id_eq}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
              <div className={style.priceInfo}>
                <h3>{item.price[0]} грн/день</h3>
                <NavLink to={`${item.id_eq}`}>
                  <div>Орендувати</div>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
