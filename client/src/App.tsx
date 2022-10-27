import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Overview,
  Pharmacies,
  Products,
  Requests,
  DashboardLayout,
} from './pages';
import './App.css';
import ApplicationSection from './components/admin/ApplicationSection';
import YourApplicationIsInReview from './components/YourApplicationIsInReview';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/admin',
      element: <YourApplicationIsInReview />,
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
  ]);
  return <RouterProvider router={router} />;
};
export default App;
