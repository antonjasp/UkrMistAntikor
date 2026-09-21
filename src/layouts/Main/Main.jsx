import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
export function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
