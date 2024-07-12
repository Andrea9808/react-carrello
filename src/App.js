import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import { useGlobalContext } from './context/context';

function App() {
  const { isLoading, products } = useGlobalContext();

  console.log('isLoading:', isLoading); // Debugging
  console.log('products:', products); // Debugging

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
      {products.length > 0 ? (
        <Cart />
      ) : (
        <div className="center-item">
          <h2>Il carrello è vuoto</h2>
        </div>
      )}
      <TotalBox />
    </div>
  );
}

export default App;
