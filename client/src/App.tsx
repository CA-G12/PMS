import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Overview,
  Pharmacies,
  Products,
  DashboardLayout,
  AllProducts,
  AllPharmacies,
} from './pages';
import AllRequests from './components/admin/allRequests';
import './App.css';
import ApplicationSection from './components/admin/ApplicationSection';
import {
  PharmacyProfileRequests,
  PharmacyProducts,
  ProfileLayout,
  ProfileOverview,
  SalesHistory,
} from './pages/PharmacyProfile';
import { AuthProvider } from './context/authContext';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';

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
          element: <AllRequests />,
        },
        {
          path: 'applications',
          element: <ApplicationSection />,
        },
      ],
    },
    {
      path: 'AllProducts',
      element: <AllProducts />,
    },
    {
      path: 'pharmacies',
      element: <AllPharmacies />,
    },
    {
      path: 'pharmacy/:pharmacyId',
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
          path: 'sales-history',
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
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
export default App;
