import { Outlet, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import style from './GeneralPage.module.css';
export function GeneralPage() {
  const { idEq } = useParams();
  return (
    <>
      <main className={style.mainGen}>
        {!idEq && (
          <h1 className={style.mainHeadline}>Оренда будівельного обладнання</h1>
        )}
        <Breadcrumbs />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
