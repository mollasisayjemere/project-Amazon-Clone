
import React, { useReducer } from 'react';

import {Type} from './ActionType'

export const initialState = {  
  basket: []
};

export const reducer = (state, action) => { 
  switch (action.type) {  
    case Type.ADD_TO_BASKET: 
      return { ...state, basket: [...state.basket, action.item] }; 
    default:
      return state;
  }
};

