
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <>

      <header>
        <NavBar/>
      </header>

      <ItemListContainer greeting = 'Catalogo'/>
      
      </>
  )
}

export default App;
