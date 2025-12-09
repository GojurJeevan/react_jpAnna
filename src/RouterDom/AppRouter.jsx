import React from "react";
import { Route, Routes } from "react-router-dom";
import { Product } from "../pages/Product";
import { Projects } from "../pages/Projects";
import { UserLogin } from "../components/UserLogin";
import { SignUp } from "../userenter/SignUp";
import Login from "../userenter/Login";
import ProductsData from "../Products/ProductsData";
import Home from "../pages/Home";
import { UserDetails } from "../components/UserDetails";
import Sidebar from "../sidebar/SideBar";


export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductsData />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userdetails" element={<UserDetails/>}/>
        <Route path="/sidebar" element={<Sidebar/>} />
      </Routes>
    </div>
  );
}
