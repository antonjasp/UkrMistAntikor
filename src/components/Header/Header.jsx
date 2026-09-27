import style from './Header.module.css';
// import { NavLink } from 'react-router-dom';
export function Header() {
  return (
    <>
      <header>
        <div className={style.logoContainer}>
          <h1>УкрМістАнтикор</h1>
        </div>
        <div className={style.navmenuWrapper}>
          <navmenu className={style.navmenu}>
            <form class={style.searchForm}>
              <input
                type="text"
                class={style.searchInput}
                placeholder="Який інструмент бажаєте взяти в оренду?"
              />
              <button type="submit" class={style.searchBtn} aria-label="Знайти">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
            <div className={style.contactBtn}>
              <p>контакти</p>
            </div>
          </navmenu>
        </div>
        {/* <div className={style.logoContainer}>
          <img src="/icons/logo.svg" alt="" className={style.logo} />
          <a
            href="https://t.me/+380678863412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logoTelegram.svg"
              alt=""
              className={style.logoTelegram}
            />
          </a>
          <a
            href="viber://chat?number=%2B380678863412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/logoViber.svg"
              alt=""
              className={style.logoViber}
            />
          </a>
          <div className={style.contactInfo}>
            (066)-075-02-28 <br />
            (067)-886-34-12
          </div>
        </div>
        <div className={style.navMenu}>
          <NavLink to="/">Оренда</NavLink>
          <NavLink to="/term">Умови оренди</NavLink>
          <NavLink to="/about">Про нас</NavLink>
          <NavLink to="/contact">Контакти</NavLink>
        </div> */}
      </header>
    </>
  );
}
