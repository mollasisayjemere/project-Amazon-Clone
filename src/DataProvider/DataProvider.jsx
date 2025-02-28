

import React, { children, createContext, useReducer } from "react";


export const Datacontext = createContext();

function DataProvider({ children, reducer, initialState }) {
 

  return (
    <Datacontext.Provider value={ useReducer(reducer,initialState)}>
    
      {children}
    </Datacontext.Provider>
  );
}

export default DataProvider;
