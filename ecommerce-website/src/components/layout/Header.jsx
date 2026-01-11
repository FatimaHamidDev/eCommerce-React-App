import { NavLink } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>eCom App</h1>
        <p>With React Router Dom</p>
      </div>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart: ({cartCount})</NavLink>
      </nav>
    </header>
  );
}
