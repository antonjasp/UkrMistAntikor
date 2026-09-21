import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <>
      <header>
        <div className={style.logoContainer}>
          <img src="/icons/logo.svg" alt="" className={style.logo} />
          <img
            src="/icons/logoTelegram.svg"
            alt=""
            className={style.logoTelegram}
          />
          <img src="/icons/logoViber.svg" alt="" className={style.logoViber} />
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
        </div>
      </header>
    </>
  );
}
