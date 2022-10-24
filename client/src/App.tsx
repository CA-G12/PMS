import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Overview,
  Pharmacies,
  Products,
  Applications,
  DashboardLayout,
} from './pages';
import AllRequests from './components/admin/AllRequests';
import './App.css';

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
          element: <Applications />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
