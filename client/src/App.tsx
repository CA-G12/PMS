import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview, Pharmacies, Products, DashboardLayout } from './pages';
import AllRequests from './components/admin/allRequests';
import './App.css';
import ApplicationSection from './components/admin/ApplicationSection';
import {
  ActiveRequests,
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
      path: '/pharmacy',
      element: <ProfileLayout />,
      children: [
        {
          path: 'profile/overview',
          element: <ProfileOverview />,
        },
        {
          path: 'pharmacy/products',
          element: <PharmacyProducts />,
        },
        {
          path: 'active/requests',
          element: <ActiveRequests />,
        },
        {
          path: 'sales/history',
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
