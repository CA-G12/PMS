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
import AllProducts from './pages/AllProducts';
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
import { ProtectedRoute } from './components/ProtectedRoutes';
import YourApplicationIsInReview from './components/YourApplicationIsInReview';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/admin',
      element: (
        <ProvideAuth>
          <ProtectedRoute isAdmin>
            <DashboardLayout />
          </ProtectedRoute>
        </ProvideAuth>
      ),
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
          element: (
            <ProvideAuth>
              <ProtectedRoute isPharmacy>
                <PharmacyProfileRequests />
              </ProtectedRoute>
            </ProvideAuth>
          ),
        },
        {
          path: 'salesHistory',
          element: (
            <ProvideAuth>
              <ProtectedRoute isPharmacy>
                <SalesHistory />
              </ProtectedRoute>
            </ProvideAuth>
          ),
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
    },
    {
      path: '/pharmacies',
      element: <AllPharmacies />,
    },
    {
      path: '/products',
      element: <AllProducts />,
    },
    {
      path: 'pharmacy/pending',
      element: <YourApplicationIsInReview />,
    },
  ]);
  return (
    <ProvideAuth>
      <RouterProvider router={router} />
    </ProvideAuth>
  );
};
export default App;
