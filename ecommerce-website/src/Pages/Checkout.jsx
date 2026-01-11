import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import ThankYouModal from "../components/ThankyouModal";


export default function Checkout() {

  const [showThankYou, setShowThankYou] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    // Frontend-only simulation
    setShowThankYou(true);
  };

  return (
    <div className="checkout-page">
      <h2 >Checkout</h2>
      <br />  
      <form className="checkout-form" onSubmit={(e) => {
        e.preventDefault();
        handlePlaceOrder();
      }}> <label htmlFor="name">Full Name</label>
      <Input
        value={name}
        onChange={setName}
        placeholder="Enter your name"
      />
      
      <label htmlFor="email">Email Address</label>
      <Input
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />

      <label htmlFor="address">Shipping Address</label>
      <Input
        value={address}
        onChange={setAddress}
        placeholder="Enter your address"
      />

      <Button type="button"
        className="btn-primary" 
        onClick={handlePlaceOrder}>Place Order</Button>

      </form>
       
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />


    </div>
  );
}

//    NOTES:

//  Controlled component -- The value of each <Input /> comes from useState

//  Lifting state up  -- state is managed in the parent component (Checkout) instead of inside each Input.  

//  Reusable UI components -- Input and Button
