import { createBrowserRouter } from 'react-router-dom';
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
          { index: true, element: <CategoryCardItem /> },
          {
            path: 'product/:categoryId',
            element: <CardItem />,
          },
          {
            path: 'product/:categoryId/:idEq',
            element: <CardAboutItem />,
            children: [
              {
                index: true, // за бажанням: за замовчуванням відкривати опис
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
          }, //children
        ],
      },
      {
        path: '/term',
        element: <TermOfLease />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);
