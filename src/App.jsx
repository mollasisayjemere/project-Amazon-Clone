import { useContext, useEffect, useState } from "react";
import { Datacontext } from "./DataProvider/DataProvider.jsx";
import "./App.css";
import { Type } from "./Utility/ActionType.js";
import { auth } from "./Utility/Firebase.js";
import Router from "./Router.jsx";
function App() {
  const [{ user }, dispatch] = useContext(Datacontext);

  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
    
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  

  
  return (
    <>
      <Router />
    </>
  );
}

export default App;
