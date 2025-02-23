import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import { Carousel } from "react-responsive-carousel";
import Carousell from "./Components/Carousell/Carousell.jsx";
import { Category } from "./Components/Category/Category.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousell/>
      <Category/>
    </>
  );
}

export default App;
