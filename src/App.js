
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
    
    <ItemListContainer greeting = 'Catalogo'>
      <ItemCount stock='10' initial='0'></ItemCount>
    </ItemListContainer>
    
  

    </>
  )
}

export default App;
