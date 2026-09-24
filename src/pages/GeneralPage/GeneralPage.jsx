import { Outlet, useParams } from 'react-router-dom';
import { CategoryMenu } from '../../components/СategoryMenu/CategoryMenu';
import style from './GeneralPage.module.css';
export function GeneralPage() {
  const { idEq } = useParams();
  return (
    <>
      <main className={style.mainGen}>
        {!idEq && <h1>Оренда інструменту</h1>}
        {!idEq && (
          <div className={style.categoryMenu}>
            <CategoryMenu />
          </div>
        )}
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
