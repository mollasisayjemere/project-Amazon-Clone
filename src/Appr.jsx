import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let Increase = () => {
    setCount(count + 1);
  };
  let Decrease = () => {
    setCount(count - 1);
  };
  let Reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => Increase()}>Increase</button>
      <button onClick={() => Decrease()}>Decrease</button>
      <button onClick={() => Reset()}>Reset</button>
    </>
  );
}

export default App;
