import { Outlet } from 'react-router-dom';
import { CategoryMenu } from '../../components/СategoryMenu/CategoryMenu';
import style from './GeneralPage.module.css';
export function GeneralPage() {
  return (
    <>
      <main className={style.mainGen}>
        <h1>Оренда інструменту</h1>
        <div className={style.categoryMenu}>
          <CategoryMenu />
        </div>
        <div className={style.cardWrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
