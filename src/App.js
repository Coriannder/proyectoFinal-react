
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';


function App() {

  const [rutaCategoria, setRutaCategoria] = useState('/')

  const gardarRuta = (ruta) =>{ // funcion que actualiza estado donde se guardan
                                // las rutas del componente ItemListContainer
    setRutaCategoria(ruta)
  }

  
  return (

    <BrowserRouter>

      <header>
        <NavBar functionDeApp={(ruta)=>gardarRuta(ruta)}/>
      </header>

      <Routes>

        <Route path='/' element={<ItemListContainer greeting = 'Catalogo'/>}/>
        <Route path='/Item/:Id' element={<ItemDetailContainer ruta={rutaCategoria}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Catalogo'/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
