
import React from "react";
import Layout from "../../Components/LayOut/Layout.jsx"; 
import Carousell from "../../Components/Carousell/Carousell.jsx";
import Category from "../../Components/Category/Category.jsx";
import Product from "../../Components/Products/Product.jsx";

function LandingPage() {
  return (
    <Layout>
      <Carousell />
      <Category />
      <Product />
    </Layout>
  );
}

export default LandingPage;

