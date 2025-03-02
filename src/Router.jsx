

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx"; 
import auth from './Pages/Auth/Auth.jsx'
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/PaymentPage/PaymentPage.jsx";
import Result from "./Pages/Results/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import Auth from "./Pages/Auth/Auth.jsx";

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Products/:productId" element={<ProductDetail />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />

          {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
          <Route path="/category/:categoryName" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;