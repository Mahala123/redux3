//import logo from './logo.svg';
//import './App.css';
//import Header from './components/LayOut/Header';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import LayOut from './components/LayOut/LayOut';
import Products from './components/Product/Products';

function App() {
   const isVisible=useSelector(state=>state.ui.carIsVisible)
  return (
    <div>
     <LayOut>
     {isVisible && <Cart/>}
      <Products/>
     </LayOut>
    </div>
  );
}

export default App;
