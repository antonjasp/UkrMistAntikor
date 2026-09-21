import { useParams } from 'react-router-dom';
import style from './CardItem.module.css';
import { dataEquipment } from '../data';
export function CardItem() {
  const { id } = useParams();
  const selectedProduct = id
    ? dataEquipment.filter((item) => String(item.id_cat) === id)
    : null;
  console.log(selectedProduct);
  console.log(id);
  return (
    <>
      {selectedProduct.map((item) => {
        return (
          <div className={style.cardItem}>
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </>
  );
}
