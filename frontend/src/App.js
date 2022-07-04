import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="app">
      <Router>
        <Navbar click={()=>setSideToggle(true)}/>       
        <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
        <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>{/* if the show prop is false then the backdrop will be hidden */}
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
