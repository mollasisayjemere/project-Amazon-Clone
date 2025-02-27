

import React, { createContext, useReducer } from "react";

export const Datacontext = createContext();

function DataProvider({ children, Reducer, initialState }) {
  const [state, dispatch] = useReducer(Reducer, initialState); 

  return (
    <Datacontext.Provider value={{ state, dispatch }}>
      {" "}
      {/* Provide both state and dispatch */}
      {children}
    </Datacontext.Provider>
  );
}

export default DataProvider;
