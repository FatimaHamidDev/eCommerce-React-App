export default function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>eCom App</h1>
      <span>Items In Cart: {cartCount}</span>
    </header>
  );
}
