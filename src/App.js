import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar"; 
import Cart from "./components/Cart"; 
import TotalBox from "./components/TotalBox"; 
import Loading from "./components/Loading"; 
import { useGlobalContext } from './context/context'; 

function App() {
   // utilizza il contesto globale per ottenere i valori isLoading, products e total
  const { isLoading, products, total } = useGlobalContext();

  console.log('isLoading:', isLoading); //debugging
  console.log('products:', products); // debugging

  // verifica se isLoading è true
  if (isLoading) { 
    return (
      <div>
        <Navbar /> 
        <div className="center-item">
          <Loading /> 
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar /> 
      {/* verifica se ci sono prodotti nel carrello */}
      {products.length > 0 ? ( 
        // se ci sono prodotti, mostra il componente Cart
        <Cart /> 
      ) : (
        <div className="center-item">
          {/* se non ci sono prodotti, mostra un messaggio che il carrello è vuoto */}
          <h2>Il carrello è vuoto</h2> 
        </div>
      )}
      {/* mostra il componente TotalBox solo se il totale è maggiore di zero */}
      {total > 0 && <TotalBox />} 
    </div>
  );
}

export default App; 
