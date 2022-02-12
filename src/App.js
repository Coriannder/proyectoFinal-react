
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

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
