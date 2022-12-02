import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import { AppRoutes } from './routes';

export function Router() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.HOME,
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
