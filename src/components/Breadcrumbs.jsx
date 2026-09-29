import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css"; // або ваші CSS/Tailwind стилі

// Словник для гарного відображення назв замість URL-сегментів
const BREADCRUMB_MAP = {
  "": "Головна",
  product: "Каталог",
  1: "Віброплити",
  // додавайте потрібні шляхи та їх зрозумілі назви
};

export const Breadcrumbs = () => {
  const location = useLocation();

  // Отримуємо масив частин URL (наприклад, "/rent/vibro-plates" -> ["rent", "vibro-plates"])
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
      <ul>
        {/* Посилання на головну сторінку */}
        <li>
          <Link to="/">Головна</Link>
          {pathnames.length > 0 && <span className={styles.separator}>›</span>}
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Витягуємо зрозумілу назву зі словника або форматуємо сам URL-сегмент
          const displayName = BREADCRUMB_MAP[name] || decodeURIComponent(name);

          return (
            <li key={routeTo}>
              {isLast ? (
                // Останній елемент (поточна сторінка) робимо просто текстом
                <span className={styles.active}>{displayName}</span>
              ) : (
                // Проміжні елементи робимо клікабельними посиланнями
                <>
                  <Link to={routeTo}>{displayName}</Link>
                  <span className={styles.separator}>›</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
