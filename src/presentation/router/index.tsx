import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Sucess from '../pages/Success';
import { AppRoutes } from './routes';

export function Router() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.HOME,
      element: <Home />,
    },
    {
      path: AppRoutes.CART,
      element: <Cart />,
    },
    {
      path: AppRoutes.SUCCESS,
      element: <Sucess />,
    },
  ]);

  return <RouterProvider router={router} />;
}
