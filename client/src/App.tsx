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
      path: "/admin",
      element: <DashboardLayout />,
      children: [
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "pharmacies",
          element: <Pharmacies />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "requests",
          element: <Requests />,
        },
        {
          path: "applications",
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
