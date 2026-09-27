import { Outlet, useParams } from 'react-router-dom';

import style from './GeneralPage.module.css';
export function GeneralPage() {
  const { idEq } = useParams();
  return (
    <>
      <main className={style.mainGen}>
        {!idEq && <h1 className={style.mainHeadline}>Оренда обладнання</h1>}

        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
