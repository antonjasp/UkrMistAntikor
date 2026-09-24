import { dataEquipment } from '../data';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import style from './CardAboutItem.module.css';

export function CardAboutItem() {
  const { idEq } = useParams();
  const selectProduct = dataEquipment.filter(
    (item) => String(item.id_eq) === idEq,
  );

  return (
    <>
      <div className={style.wrapperAbout}>
        <h1 className={style.headline}>{selectProduct[0].name}</h1>
        <img
          src={selectProduct[0].img}
          alt="equuipImage"
          className={style.imgAbout}
        />
        <div className={style.rentPrice}>
          <table className={style.tablePrice}>
            <tbody>
              <tr className={style.tr1}>
                <td>1-2 дня</td>
                <td>3-6 днів</td>
                <td>Ціна за місяць</td>
                <td className={style.zastava}>Застава</td>
              </tr>
              <tr className={style.tr2}>
                <td>{selectProduct[0].price[0]} грн/день</td>
                <td>{selectProduct[0].price[1]} грн/день</td>
                <td>{selectProduct[0].price[2]}</td>
                <td>{selectProduct[0].price[3]}</td>
              </tr>
            </tbody>
          </table>
          <a href="tel:+380678863412">
            <div className={style.rentButton}>Орендувати</div>
          </a>
          <div className={style.chaWrapper}>
            <div className={style.menu}>
              <NavLink
                className={({ isActive }) =>
                  `${style.tabMenu} ${isActive ? style.active : ''}`
                }
                to="description"
              >
                Опис
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${style.tabMenu} ${isActive ? style.active : ''}`
                }
                to="characteristics"
              >
                Характеристики
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${style.tabMenu} ${isActive ? style.active : ''}`
                }
                to="instructions"
              >
                Інструкція
              </NavLink>
            </div>
            <div className={style.charContainer}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
