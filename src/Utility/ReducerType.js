


// import React, { useReducer } from "react";
// import { Type } from "./ActionType";

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       const existingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );

//       if (!existingItem) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       } else {
//         const updatedBasket = state.basket.map((item) =>{
//           return item.id === action.item.id
//             ? { ...item, amount: item.amount + 1 }
//             : item;
//         }
//         );
//         return { ...state, basket: updatedBasket };
//       }

//     case Type.REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex((item) => item.id === action.id);
//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         if (newBasket[index].amount > 1) {
//           newBasket[index] = {
//             ...newBasket[index],
//             amount: newBasket[index].amount - 1,
//           };
//         } else {
//           newBasket.splice(index, 1);
//         }
//       }
//       return { ...state, basket: newBasket };

//     default:
//       return state;
//   }
// };


// DataProvider.jsx (reducer logic)
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       // Check if item exists in basket
//       const existingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );
      
//       if (existingItem) {
//         // Increment quantity
//         return {
//           ...state,
//           basket: state.basket.map((item) =>
//             item.id === action.item.id
//               ? { ...item, amount: item.amount + 1 }
//               : item
//           ),
//         };
//       }
//       // Add new item with quantity 1
//       return {
//         ...state,
//         basket: [...state.basket, { ...action.item, amount: 1 }],
//       };

//     case Type.REMOVE_FROM_BASKET:
//       const existingProduct = state.basket.find(
//         (item) => item.id === action.id
//       );
      
//       if (existingProduct.amount === 1) {
//         // Remove item completely if quantity is 1
//         return {
//           ...state,
//           basket: state.basket.filter((item) => item.id !== action.id),
//         };
//       }
//       // Decrement quantity
//       return {
//         ...state,
//         basket: state.basket.map((item) =>
//           item.id === action.id
//             ? { ...item, amount: item.amount - 1 }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// Utility/ReducerType.js
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }],
      };

    case "REMOVE_FROM_BASKET":
      const itemToRemove = state.basket.find(
        (item) => item.id === action.id
      );
      if (itemToRemove.amount === 1) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.id),
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};