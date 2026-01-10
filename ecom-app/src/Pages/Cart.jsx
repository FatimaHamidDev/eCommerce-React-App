
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/ui/Button";

export default function Cart({ cartItems, onRemove, onCheckout }) {
  if (!cartItems.length) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <>
      <h2>Your Cart</h2>

      <div className="cart-top">
          
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}

            />
          ))}

          <CartSummary items={cartItems} />

        </div>

        <div className="cart-bottom">
          
        <Button onClick={onCheckout}>Proceed to Checkout</Button>
        
        </div>

    </>
  );
}
