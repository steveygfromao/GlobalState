import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { RemoveItem } from './RemoveItem';
 
export const ShoppingList = () => {
   const { shoppingList } = useContext(GlobalContext);
 
   return ( 
      <ul className = 'shopping-list'> 
         {shoppingList.map((item, index) => (
             <li key = {index} className = 'list-item'> 
                       {item} <RemoveItem item = {item} /> 
            </li>
            )
         )}
      </ul>
   )
}