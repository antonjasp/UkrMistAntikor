import { useState, useEffect } from 'react';
import { dataEquipment } from '../data';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import style from './CardAboutItem.module.css';

export function CardAboutItem() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { idEq } = useParams();
  const selectProduct = dataEquipment.find(
    (item) => String(item.id_eq) === idEq,
  );

  // Отримуємо масив фотографій
  const imagesList =
    selectProduct?.images || (selectProduct?.img ? [selectProduct.img] : []);

  // Стейт для вибраного фото
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // Блокування скролу сторінки, коли модальне вікно відкрите
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (!selectProduct) return null;

  const handleClick = (e) => {
    // На десктопі (ширина >= 768px) блокуємо виклик і відкриваємо модальне вікно
    if (window.innerWidth >= 768) {
      e.preventDefault();
      setIsMenuOpen(true);
    }
  };

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

        {/* Мініатюри */}
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
              <td>{selectProduct.price[0]} </td>
              <td>{selectProduct.price[1]} </td>
              <td>{selectProduct.price[2]}</td>
              <td>{selectProduct.price[3]}</td>
            </tr>
          </tbody>
        </table>

        {/* Кнопка Орендувати */}
        <div className={style.rentButtonContainer}>
          <a
            href="tel:+380678863412"
            className={style.rentButtonLink}
            onClick={handleClick}
          >
            <div className={style.rentButton}>Орендувати</div>
          </a>
        </div>

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

      {/* Модальне вікно та заповнення затемненням заднього фону */}
      {isMenuOpen && (
        <div
          className={style.modalOverlay}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()} // Запобігає закриттю при кліку всередині вікна
          >
            <button
              className={style.closeButton}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрити"
            >
              &times;
            </button>
            <p className={style.contactTitle}>
              <strong>Контактна інформація:</strong>
            </p>
            <p className={style.contaccNumberContainer}>
              <p>Телефони:</p>{' '}
              <a href="tel:+380678863412">+380 (67) 886-34-12</a>
              <a href="tel:+380660750228">+380 (66) 075-02-28</a>
            </p>
            <p>
              Viber:{' '}
              <a href="viber://chat?number=%2B380660750228">
                +380 (66) 075-02-28
              </a>
            </p>
            <p>
              Telegram:{' '}
              <a
                href="https://t.me/your_account"
                target="_blank"
                rel="noreferrer"
              >
                +380 (67) 886-34-12
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
