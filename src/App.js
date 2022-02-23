
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <>

      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting = 'Catalogo'/>
      <ItemDetailContainer/>
      
    </>
  )
}

export default App;
