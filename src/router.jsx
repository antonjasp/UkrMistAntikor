import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GeneralPage } from './pages/GeneralPage/GeneralPage';
import { TermOfLease } from './pages/TermOfLease/TermOfLease';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { Main } from './layouts/Main/Main';
import { CategoryCardItem } from './components/CategoryCardItem/CategoryCardItem';
import { CardItem } from './components/CardItem/CardItem';
import { CardAboutItem } from './components/CardAboutItem/CardAboutItem';
import { TabDocxViewer } from './components/TabDocxViewer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <GeneralPage />,
        children: [
          // Головна сторінка показує категорії
          { index: true, element: <CategoryCardItem /> },

          // Маршрути каталогу / товарів
          {
            path: 'product',
            children: [
              // Якщо користувач переходить просто на /product — показуємо всі категорії (або редиректимо на "/")
              { index: true, element: <CategoryCardItem /> },

              // Категорія: /product/1
              {
                path: ':categoryId',
                element: <CardItem />,
              },

              // Деталі товару: /product/1/10
              {
                path: ':categoryId/:idEq',
                element: <CardAboutItem />,
                children: [
                  {
                    index: true,
                    element: <TabDocxViewer fieldType="description" />,
                  },
                  {
                    path: 'description',
                    element: <TabDocxViewer fieldType="description" />,
                  },
                  {
                    path: 'characteristics',
                    element: <TabDocxViewer fieldType="characteristics" />,
                  },
                  {
                    path: 'instructions',
                    element: <TabDocxViewer fieldType="instructions" />,
                  },
                ],
              },
            ],
          },
        ],
      },
      { path: 'term', element: <TermOfLease /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },

      // Обробка неіснуючих маршрутів (404)
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
