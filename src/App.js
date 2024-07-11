import {Bootstrap} from 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <TotalBox />
    </div>
  );
}

export default App;
