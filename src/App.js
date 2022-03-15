
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import {CartProvider} from './Context/CartContext'





function App() {

  return (


    <CartProvider>

        <BrowserRouter>

            <header>
              <NavBar/>
            </header>

            <Routes>
              <Route path='/' element={<ItemListContainer greeting = 'Catalogo'/>}/>
              <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>         
              <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Catalogo'/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          
        </BrowserRouter>

    </CartProvider>
  )
}

export default App;
