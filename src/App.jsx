import './App.css';
import { AddItem } from './components/AddItem';
import Header from './components/Header';
import { ShoppingList } from './components/ShoppingList';
import { GlobalProvider } from './context/GlobalState';
 
function App() {
return (
   <div className="container"> 
        <Header/>
        <GlobalProvider> 
           <ShoppingList></ShoppingList>
        
           <AddItem></AddItem>

        </GlobalProvider> 
  </div>

 );
}

export default App;