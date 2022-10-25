import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview, Pharmacies, Products, DashboardLayout } from './pages';
import AllRequests from './components/admin/allRequests';
import './App.css';
import ApplicationSection from './components/admin/ApplicationSection';

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
  ]);
  return <RouterProvider router={router} />;
};
export default App;
