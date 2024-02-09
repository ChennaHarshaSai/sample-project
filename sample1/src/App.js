import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/ProductDetails/Product";
import Coupon from "./Components/Coupons/Coupon";
import Meat from "./Components/DepartmentsProducts/Meat";
import DepartmentDetails from "./Components/DepartmentsProducts/DepartmentDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product-details" Component={Product} />
        <Route path="/coupon-details" Component={Coupon} />
        <Route path="/:department-details" Component={DepartmentDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
