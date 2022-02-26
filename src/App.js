
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>

      <header>
        <NavBar/>
      </header>

      <Routes>

        <Route path='/' element={<ItemListContainer greeting = 'Catalogo'/>}/>
        <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Catalogo'/>}/>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
