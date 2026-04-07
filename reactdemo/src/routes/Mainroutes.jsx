import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from '../pages/admin/CreateProduct';
import UpdateProduct from '../pages/admin/UpdateProduct';
import Productdetails from "../pages/admin/Productdetails";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/admin/CreateProduct" element={<CreateProduct />} />
      <Route path="/product/:id" element={<Productdetails/>}/>
    </Routes>
  );
};

export default Mainroutes;
