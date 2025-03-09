

import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

function DataProvider({ children, reducer, initialState }) {
  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;