import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Overview, Pharmacies, Products, Requests,  Applications, DashboardLayout } from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <DashboardLayout />
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/pharmacies" element={<Pharmacies />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/requests" element={<Requests />}></Route>
          <Route path="/applications" element={<Applications />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
