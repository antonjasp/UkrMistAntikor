import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { dataEquipment, dataCategory } from '../data';
import style from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchContainerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 1) {
      const filteredEquipment = dataEquipment
        .filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => ({ ...item, type: 'equipment' }));

      const filteredCategories = dataCategory
        .filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => ({ ...item, type: 'category' }));

      setSearchResults([...filteredEquipment, ...filteredCategories]);
      setIsDropdownOpen(true);
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSelectResult = () => {
    setIsDropdownOpen(false);
    setSearchQuery('');
    setIsMobileSearchOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          {/* Мобільна кнопка-лупа */}
          <button
            type="button"
            className={style.mobileSearchTrigger}
            onClick={toggleMobileSearch}
            aria-label="Пошук"
          >
            {isMobileSearchOpen ? (
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

          {/* Форма пошуку (на десктопі повноцінний інпут, на мобільному показується за замовчуванням або при кліку) */}
          <div
            ref={searchContainerRef}
            className={`${style.searchPopupWrapper} ${
              isMobileSearchOpen ? style.active : ''
            }`}
          >
            <form
              className={style.searchForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className={style.searchInput}
                placeholder="Яке обладнання бажаєте взяти в оренду?"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.length > 1 && setIsDropdownOpen(true)}
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

            {/* Випадаючий список підказок */}
            {isDropdownOpen && searchResults.length > 0 && (
              <ul className={style.searchResultsList}>
                {searchResults.map((item) => {
                  const linkPath =
                    item.type === 'equipment'
                      ? `/product/${item.id_cat}/${item.id_eq}`
                      : `/product/${item.id_cat}`;

                  return (
                    <li
                      key={
                        item.type === 'equipment'
                          ? `eq-${item.id_eq}`
                          : `cat-${item.id_cat}`
                      }
                    >
                      <NavLink
                        to={linkPath}
                        className={style.searchResultItem}
                        onClick={handleSelectResult}
                      >
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.name}
                            className={style.searchResultImg}
                          />
                        )}
                        <span className={style.searchResultName}>
                          {item.name}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}

            {isDropdownOpen &&
              searchResults.length === 0 &&
              searchQuery.trim().length > 1 && (
                <div className={style.searchResultsList}>
                  <div className={style.noResults}>Нічого не знайдено</div>
                </div>
              )}
          </div>

          {/* Кнопка бургер-меню */}
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