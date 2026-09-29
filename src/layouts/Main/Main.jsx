import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer.jsx";
export function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
