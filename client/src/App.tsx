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
  ActiveRequests,
  PharmacyProducts,
  ProfileLayout,
  ProfileOverview,
  SalesHistory,
} from './pages/PharmacyProfile';
import { AuthProvider } from './context/authContext';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';
import './App.css';
import Home from './pages/LandingPages/Home';

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
      path: 'AllProducts',
      element: <AllProducts />,
    },
    {
      path: 'pharmacies',
      element: <AllPharmacies />,
    },
    {
      path: '/pharmacy',
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
          element: <ActiveRequests />,
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
      path: '/',
      element: <Home />,
      children: [{ path: 'home', element: <Home /> }],
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
export default App;
