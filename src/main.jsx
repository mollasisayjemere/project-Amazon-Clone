// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import DataProvider from './DataProvider/DataProvider.jsx'
// import { initialstate, Reducer}  from "./Utility/ReducerType.js";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <DataProvider Reducer ={Reducer} Initialstate={initialstate}>
//       <App />
//     </DataProvider>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./DataProvider/DataProvider.jsx";
import { initialState, Reducer } from "./Utility/ReducerType.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider Reducer={Reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);