import Button from "../ui/Button";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <span>{item.title}</span>
      <span>${item.price}</span>
      <Button onClick={() => onRemove(item.id)}>Remove</Button>
    </div>
  );
}
