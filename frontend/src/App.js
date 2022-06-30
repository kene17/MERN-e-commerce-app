import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </Router>
      Hello all
    </div>
  );
}

export default App;
