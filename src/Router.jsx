import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/PaymentPage/ Payment.jsx";
import Result from "./Pages/Results/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";

import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QyvaoRueCkU6DC6Akfa32sO6aEpgJC8xiBIp6p5ju6ivZh9F5YXZWZWt6KLTnv3hTZ5sJUzPUpBHRJDxGdXEmyx00Z3g2qWdR"

  // "pk_test_51QyvaoRueCkU6DC6Akfa32sO6aEpgJC8xiBIp6p5ju6ivZh9F5YXZWZWt6KLTnv3hTZ5sJUzPUpBHRJDxGdXEmyx00Z3g2qWdR"
);

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Products/:productId" element={<ProductDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                meg={"you must log in to access your order"}
                redirect={"/payments"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                meg={"you must log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
