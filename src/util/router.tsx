import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/rootLayout/RootLayout';
import ErrorPage from '../pages/errorPage/ErrorPage';
import HomePage from '../pages/homePage/HomePage';
import ProjectDetailsPage from '../pages/projectDetailsPage/ProjectDetailsPage';
import ContactPage from '../pages/contactPage/ContactPage';
import SuccessPage from '../pages/successPage/SuccessPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':projectId',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'success',
        element: <SuccessPage />,
      },
      {
        path: 'error',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
