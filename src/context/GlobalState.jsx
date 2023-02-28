import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   shoppingList : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions for changing state
   function addItemToList(item) {
       dispatch({
           type: 'ADD',
           payload: item
       });
   }
   function removeItemFromList(item) {
       dispatch({
           type: 'REMOVE',
           payload: item
       });
   }

   return(
      <GlobalContext.Provider value = {{shoppingList : state.shoppingList, addItemToList, removeItemFromList}}> 
        {children} 
   </GlobalContext.Provider>
   )
}