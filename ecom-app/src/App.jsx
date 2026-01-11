import React from 'react'
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState("shop");

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <Layout cartCount={cartItems.length}>
      <nav className="nav">
        <button onClick={() => setPage("shop")}>Shop</button>
        <button onClick={() => setPage("cart")}>Cart</button>
        <button onClick={() => setPage("checkout")}>Checkout</button>
      </nav>

      {page === "shop" && <Shop onAddToCart={addToCart} />}
      
      {page === "cart" && (
        <Cart cartItems={cartItems} onRemove={removeFromCart} 
        onCheckout={() => setPage("checkout")} />
      )}
      
      {page === "checkout" && <Checkout />}
    </Layout>
  );
}

export default App


// Single source of truth
// Predictable data flow
// No routing complexity yet