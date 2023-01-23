import React from "react";
import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";

const Routers = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;


  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      {isLoggedIn && <Route path="shop" element={<Shop />} />}
      {isLoggedIn && <Route path="shop/:id" element={<ProductDetail />} />}
      {isLoggedIn && <Route path="cart" element={<Cart />} />}
      {isLoggedIn && <Route path="checkout" element={<CheckOut />} />}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
