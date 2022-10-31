import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Overview,
  Pharmacies,
  Products,
  Requests,
  DashboardLayout,
  AllPharmacies,
} from './pages';
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
          element: <Requests />,
        },
        {
          path: 'applications',
          element: <ApplicationSection />,
        },
      ],
    },
    {
      path: 'pharmacies',
      element: <AllPharmacies />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
