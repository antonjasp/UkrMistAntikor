import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <header>
      <div className={style.logoContainer}>
        <h1>УкрМістАнтикор</h1>
        <div className={style.contactContainer}>
          <a
            href="https://t.me/+380678863412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logoTelegram.svg"
              alt="Telegram"
              className={style.logoTelegram}
            />
          </a>
          <a
            href="viber://chat?number=%2B380660750228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logoViber.svg"
              alt="Viber"
              className={style.logoViber}
            />
          </a>
          <div className={style.contactInfo}>
            (066)-075-02-28 <br />
            (067)-886-34-12
            <br />
            м.Київ
          </div>
        </div>
      </div>

      <div className={style.navmenuWrapper}>
        <nav className={style.navmenu}>
          {/* Кнопка виклику пошуку на мобільних */}
          <button
            type="button"
            className={style.mobileSearchTrigger}
            onClick={toggleSearch}
            aria-label="Пошук"
          >
            {isSearchOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            )}
          </button>

          {/* Панель пошуку */}
          <div
            className={`${style.searchPopupWrapper} ${isSearchOpen ? style.active : ''}`}
          >
            <form className={style.searchForm}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Яке обладнання бажаєте взяти в оренду?"
              />
              <button
                type="submit"
                className={style.searchBtn}
                aria-label="Знайти"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>

          {/* Бургер кнопка */}
          <button
            type="button"
            className={`${style.burgerBtn} ${isMenuOpen ? style.open : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Меню навігації */}
          <div className={`${style.navMenu} ${isMenuOpen ? style.active : ''}`}>
            <NavLink to="/" onClick={closeMenu}>
              Оренда
            </NavLink>
            <NavLink to="/term" onClick={closeMenu}>
              Умови оренди
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              Про нас
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Контакти
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
