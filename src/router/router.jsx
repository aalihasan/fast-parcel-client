import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Authentication/login/Login';
import Register from '../pages/Authentication/register/Register';
import Coverage from '../pages/coverage/Coverage';
import PrivateRoute from '../routes/PrivateRoute';
import SendParcel from '../pages/sendParcel/SendParcel';
import DashboardLayout from '../layouts/DashboardLayout';
import MyParcels from '../pages/Dashboard/MyParcels';
import Payment from '../pages/Dashboard/payment/Payment';



export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('./serviceCenter.json'),
      },
      {
        path: 'sendparcel',
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'myparcels',
        Component: MyParcels,
      },
      {
        path: 'payment/:parcelId',
        Component:Payment,
      },
    ],
  },
]);

