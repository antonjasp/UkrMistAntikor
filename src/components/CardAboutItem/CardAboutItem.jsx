import { useState } from 'react';
import { dataEquipment } from '../data';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import style from './CardAboutItem.module.css';

export function CardAboutItem() {
  const { idEq } = useParams();
  const selectProduct = dataEquipment.find(
    (item) => String(item.id_eq) === idEq,
  );

  // Отримуємо масив фотографій (якщо images є — використовуємо його, якщо тільки img — робимо з нього масив)
  const imagesList =
    selectProduct?.images || (selectProduct?.img ? [selectProduct.img] : []);

  // Стейт для вибраного фото (за замовчуванням перше з масиву)
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!selectProduct) return null;

  return (
    <div className={style.wrapperAbout}>
      {/* Блок галереї ліворуч */}
      <div className={style.galleryWrapper}>
        <div className={style.mainImgBox}>
          <img
            src={imagesList[selectedImgIndex]}
            alt={selectProduct.name}
            className={style.imgAbout}
          />
        </div>

        {/* Мініатюри рендеримо тільки якщо фотографій більше 1 */}
        {imagesList.length > 1 && (
          <div className={style.thumbnailsList}>
            {imagesList.map((imgUrl, index) => (
              <button
                key={index}
                type="button"
                className={`${style.thumbBtn} ${
                  index === selectedImgIndex ? style.thumbActive : ''
                }`}
                onClick={() => setSelectedImgIndex(index)}
              >
                <img src={imgUrl} alt={`Прев'ю ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Права частина з цінами та описом */}
      <div className={style.rentPrice}>
        <table className={style.tablePrice}>
          <tbody>
            <tr className={style.tr1}>
              <td>{selectProduct.priceInfo[0]}</td>
              <td>{selectProduct.priceInfo[1]}</td>
              <td>{selectProduct.priceInfo[2]}</td>
              <td className={style.zastava}>{selectProduct.priceInfo[3]}</td>
            </tr>
            <tr className={style.tr2}>
              <td>{selectProduct.price[0]} грн/день</td>
              <td>{selectProduct.price[1]} грн/день</td>
              <td>{selectProduct.price[2]}</td>
              <td>{selectProduct.price[3]}</td>
            </tr>
          </tbody>
        </table>

        <a href="tel:+380678863412" style={{ textDecoration: 'none' }}>
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
              <p>Опис</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${style.tabMenu} ${isActive ? style.active : ''}`
              }
              to="characteristics"
            >
              <p>Характеристики</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${style.tabMenu} ${isActive ? style.active : ''}`
              }
              to="instructions"
            >
              <p>Інструкція</p>
            </NavLink>
          </div>
          <div className={style.charContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
