import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import { dataCategory, dataEquipment } from './data'; // Імпортуйте ваші масиви даних

// Статичний словник залишаємо тільки для фіксованих системних сторінок
const STATIC_MAP = {
  '': 'Головна',
  product: 'Каталог',
  term: 'Умови оренди',
  about: 'Про нас',
  contact: 'Контакти',
  description: 'Опис',
  characteristics: 'Характеристики',
  instructions: 'Інструкція',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Хелпер для визначення назви поточного сегмента
  const getBreadcrumbName = (segment, index, allSegments) => {
    // 1. Статичні назви сторінок
    if (STATIC_MAP[segment]) {
      return STATIC_MAP[segment];
    }

    const prevSegment = allSegments[index - 1];

    // 2. Якщо попередній сегмент був "product" — це ID категорії (наприклад, /product/1)
    if (prevSegment === 'product') {
      const category = dataCategory.find(
        (cat) => String(cat.id_cat) === segment,
      );
      if (category) return category.name;
    }

    // 3. Якщо передпопередній сегмент був "product" — це ID обладнання (наприклад, /product/1/5)
    if (index >= 2 && allSegments[index - 2] === 'product') {
      const equipment = dataEquipment.find(
        (eq) => String(eq.id_eq) === segment,
      );
      if (equipment) return equipment.name;
    }

    // 4. Фолбек для інших випадків (активні вкладки /description, /characteristics або просто URL)
    return decodeURIComponent(segment);
  };

  return (
    <nav aria-label="breadcrumb" className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Головна
          </Link>
          {pathnames.length > 0 && <span className={styles.separator}>›</span>}
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = getBreadcrumbName(name, index, pathnames);

          return (
            <li key={routeTo} className={styles.item}>
              {isLast ? (
                <span className={styles.activeLabel}>{displayName}</span>
              ) : (
                <>
                  <Link to={routeTo} className={styles.link}>
                    {displayName}
                  </Link>
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
