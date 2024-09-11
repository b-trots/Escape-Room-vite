import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from '../../components/main/error/error';
import { Home } from '../../pages/home/home';
import { PrivateRoute, PublicRoute } from './private-route';
import { Login } from '../../pages/login/login';
import { AppRoute } from '../../const/const';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { Quest } from '../../pages/quest/quest';
import { Booking } from '../../pages/booking/booking';
import { Contacts } from '../../pages/contacts/contacts';

function Router() {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          element: <PublicRoute />,
          children: [
            {
              path: AppRoute.Login,
              element: <Login />,
            },
          ],
        },

        {
          element: <PrivateRoute />,
          children: [
            {
              path: AppRoute.MyQuests,
              element: <MyQuests />,
            },
            {
              path: AppRoute.Booking,
              element: <Booking />,
            },
          ],
        },

        {
          path: AppRoute.Quest,
          element: <Quest />,
        },
        {
          path: AppRoute.Contacts,
          element: <Contacts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { Router };
