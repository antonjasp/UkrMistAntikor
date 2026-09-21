import { createBrowserRouter } from "react-router-dom";
import { GeneralPage } from "./pages/GeneralPage/GeneralPage";
import { TermOfLease } from "./pages/TermOfLease/TermOfLease";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Main } from "./layouts/Main/Main";
import { CategoryCardItem } from "./components/CategoryCardItem/CategoryCardItem";
import { CardItem } from "./components/CardItem/CardItem";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <GeneralPage />,
        children: [
          { path: "/", element: <CategoryCardItem /> }, //якщо нічого не вибрано завантажуємо категорії обладнання
          {
            path: "product/:id", // За адресою '/product/1' замість карток завантажиться опис
            element: <CardItem />,
          },
        ],
      },
      {
        path: "/term",
        element: <TermOfLease />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
