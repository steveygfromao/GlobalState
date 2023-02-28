export default (state, action) => {
   switch(action.type) {
       case 'ADD':
           return {
                   shoppingList: [action.payload, ...state.shoppingList]
           }
       case 'REMOVE':
           return {
               shoppingList: state.shoppingList.filter(item => item !== action.payload)
           }
       default:
           return state;
   }
}