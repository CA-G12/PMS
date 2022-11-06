import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Overview,
  Pharmacies,
  Products,
  DashboardLayout,
  Requests,
  Applications,
} from './pages/AdminDashboard';
import AllPharmacies from './pages/AllPharmacies';
import {
  PharmacyProfileRequests,
  PharmacyProducts,
  ProfileLayout,
  ProfileOverview,
  SalesHistory,
} from './pages/PharmacyProfile';
import { ProvideAuth } from './context/authContext';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';
import './App.css';
import Home from './pages/LandingPages/Home';
import AllProducts from './pages/AllProducts';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        {
          path: 'overview',
          element: <Overview />,
        },
        {
          path: 'pharmacies',
          element: <Pharmacies />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'requests',
          element: <Requests />,
        },
        {
          path: 'applications',
          element: <Applications />,
        },
      ],
    },
    {
      path: '/pharmacy/:id',
      element: <ProfileLayout />,
      children: [
        {
          path: 'overview',
          element: <ProfileOverview />,
        },
        {
          path: 'products',
          element: <PharmacyProducts />,
        },
        {
          path: 'requests',
          element: <PharmacyProfileRequests />,
        },
        {
          path: 'salesHistory',
          element: <SalesHistory />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signUp',
      element: <Signup />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/pharmacies',
      element: <AllPharmacies />,
    },
    {
      path: '/products',
      element: <AllProducts />,
    },
  ]);
  return (
    <ProvideAuth>
      <RouterProvider router={router} />
    </ProvideAuth>
  );
};
export default App;
