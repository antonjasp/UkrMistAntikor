import { dataEquipment } from "../data";
import { NavLink, useParams } from "react-router-dom";
import style from "./CardAboutItem.module.css";
export function CardAboutItem() {
  const { id } = useParams();
  const selectProduct = dataEquipment.filter(
    (item) => String(item.id_eq) === id,
  );
  console.log(selectProduct);
  return (
    <>
      <h1 className={style.headline}>{selectProduct[0].name}</h1>
      <img
        src={selectProduct[0].img}
        alt="equuipImage"
        className={style.imgAbout}
      />
      <table className={style.tablePrice}>
        <tr className={style.tr1}>
          <td>1-2 дня</td> <td>3-6 днів</td>
          <td>Ціна за місяць</td>
          <td className={style.zastava}>Застава</td>
        </tr>
        <tr className={style.tr2}>
          <td>2500 грн/день</td> <td>2500 грн/день</td>
          <td>7500</td>
          <td>30000 </td>
        </tr>
      </table>
      <div className={style.rentButton}>Орендувати</div>

      <div className={style.chaWrapper}>
        <div class={style.menu}>
          <NavLink class={style.tabMenu} to="/characteristics">
            Характеристики
          </NavLink>
          <NavLink class={style.tabMenu} to="/description">
            Опис
          </NavLink>
          <NavLink class={style.tabMenu} to="/instructions">
            Інструкція
          </NavLink>
        </div>
        <div className={style.charContainer}></div>
      </div>
    </>
  );
}
