import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import { Carousel } from "react-responsive-carousel";
import Carousell from "./Components/Carousell/Carousell.jsx";
import { Category } from "./Components/Category/Category.jsx";
import { Product } from "./Components/Products/Product.jsx";

function App() {
  

  return (
    <>
      <Header />
      <Carousell/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;
