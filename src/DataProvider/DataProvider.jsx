

// import React, { children, createContext, useReducer } from "react";


// export const Datacontext = createContext();

// function DataProvider({ children, reducer, initialState }) {
 

//   return (
//     <Datacontext.Provider value={ useReducer(reducer,initialState)}>
    
//       {children}
//     </Datacontext.Provider>
//   );
// }

// export default DataProvider;
 
import React, { createContext, useReducer } from "react";

export const Datacontext = createContext();

function DataProvider({ children, reducer, initialState }) {
  // Destructure the useReducer return value
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Datacontext.Provider value={{ state, dispatch }}>
      {children}
    </Datacontext.Provider>
  );
}

export default DataProvider;


