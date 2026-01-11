import CartItem from "../components/cart/cartItem";
import CartSummary from "../components/cart/cartSummary";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";


export default function Cart({ cartItems, onRemove, onCheckout }) {

    const navigate = useNavigate();

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
          
        <Button onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
        
        </div>

    </>
  );
}
