
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';


const producto = {
  id: 1, 
  title: "Torta de mandarinas", 
  precio: 1800, 
  pictureUrl: "https://picsum.photos/id/1080/150/150"
  }
  

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
