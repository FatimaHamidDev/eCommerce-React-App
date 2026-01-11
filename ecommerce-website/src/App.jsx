import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <Layout cartCount={cartItems.length}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop onAddToCart={addToCart} />} />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartItems} 
          onRemove={removeFromCart} />}
        />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
