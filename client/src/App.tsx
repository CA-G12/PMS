import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Overview,
  Pharmacies,
  Products,
  Requests,
  Applications,
  DashboardLayout,
} from "./pages";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "admin/overview",
          element: <Overview />,
        },
        {
          path: "/admin/pharmacies",
          element: <Pharmacies />,
        },
        {
          path: "admin/products",
          element: <Products />,
        },
        {
          path: "admin/requests",
          element: <Requests />,
        },
        {
          path: "admin/applications",
          element: <Applications />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />

    // <>
    //   <Router>
    //     <DashboardLayout />
    //     <Routes>
    //       <Route path="/" element={<Overview />}></Route>
    //       <Route path="/admin/pharmacies" element={<Pharmacies />}></Route>
    //       <Route path="/admin/products" element={<Products />}></Route>
    //       <Route path="/admin/requests" element={<Requests />}></Route>
    //       <Route path="/admin/applications" element={<Applications />}></Route>
    //     </Routes>
    //   </Router>
    // </>
  );
};
export default App;
