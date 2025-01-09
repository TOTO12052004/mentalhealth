import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./login/login";
import Register from "./register/register";
import UserLayout from "./components/layouts/userLayout";
import Home from "./home/home";
import Product from "./product/product";
import Info from "./chats/info";
import Chats from "./chats/chats";
import DashboardLayout from "./components/layouts/dashboardLayout";
import DashboardProduct from "./dashboard/products";
import AddProduct from "./dashboard/add/addProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="/info" element={<Info />} />
          <Route path="/chats/:id" element={<Chats />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/products" element={<DashboardProduct />} />
          <Route path="/dashboard/products/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
