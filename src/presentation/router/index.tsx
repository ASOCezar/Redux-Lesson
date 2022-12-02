import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Success from '../pages/Success';
import AppSkeleton from '../Shared/AppSkeleton';
import { AppRoutes } from './routes';

export function Router() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.HOME,
      element: (
        <AppSkeleton>
          <Home />
        </AppSkeleton>
      ),
    },
    {
      path: AppRoutes.CART,
      element: (
        <AppSkeleton>
          <Cart />
        </AppSkeleton>
      ),
    },
    {
      path: AppRoutes.SUCCESS,
      element: (
        <AppSkeleton>
          <Success />
        </AppSkeleton>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
