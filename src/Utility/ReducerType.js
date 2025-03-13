import { Type } from "./ActionType";

export const initialState = {
  basket: [],
  user: null,
};
// export const Type = {
//   SET_USER: "SET_USER",
//   ADD_TO_BASKET: "ADD_TO_BASKET",
//   REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
// };
export const reducer = (state, action) => {
  console.log("Reducer action:", action); // Add this line for debugging
  switch (action.type) {
    case Type.ADD_TO_BASKET:
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
    case Type.REMOVE_FROM_BASKET:
      const itemToRemove = state.basket.find((item) => item.id === action.id);
      if (itemToRemove.amount === 1) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.id),
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
      case Type.EMPTY_BASKET:
        return{...state , basket:[]}
    default:
      return state;
  }
};
