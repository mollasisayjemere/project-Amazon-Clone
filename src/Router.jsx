
// import React from "react";
// import Layout from "./Components/LayOut/Layout";
// import Carousell from "./Components/Carousell/Carousell";
// import Category from "./Components/Category/Category";
// import Product from "./Components/Products/Product";

// function Router() {
//   return (
//     <Layout>
//       <Carousell />
//       <Category />
//       <Product />
//     </Layout>
//   );
// }

// export default 


// import React from 'react'

// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import LandingPage from './Pages/LandingPage/LandingPage,jsx'
// import SignUp from './Pages/Auth/SignUp.jsx'
// import Cart from './Pages/Cart/Cart.jsx'
// import Orders from './Pages/Orders/Orders.jsx'
// import Payment from './Pages/PaymentPage/PaymentPage.jsx'


// function  
// <() {
//   return (
//     <div> 
//         <BrowserRouter>
//         <Routes>
//         <Route path='/' element= {<LandingPage/>}/>
//         <Route path='/' element= {<signup/>}/>
//         <Route path='/' element= {<cart/>}/>
//         <Route path='/' element= {<orders/>}/>
//         <Route path='/' element= {<payment/>}/>
//         </Routes>

           
//         </BrowserRouter>
//     </div>
//   )
// }

// export default  Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx"; 
import SignUp from "./Pages/Auth/SignUp.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Payment from "./Pages/PaymentPage/PaymentPage.jsx";
import Result from "./Pages/Results/Result";

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:categoryName" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;