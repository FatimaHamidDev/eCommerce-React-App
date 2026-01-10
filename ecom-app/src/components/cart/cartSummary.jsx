export default 

function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-summary">
      <h3>Total: ${total}</h3>
    </div>
  );
}
