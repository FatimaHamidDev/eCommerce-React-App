import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function Checkout() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <h2>Checkout</h2>
      <br />  
      <label htmlFor="name">Full Name</label>
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

      <Button>Place Order</Button>
    </>
  );
}

//    NOTES:

//  Controlled component -- The value of each <Input /> comes from useState

//  Lifting state up  -- state is managed in the parent component (Checkout) instead of inside each Input.  

//  Reusable UI components -- Input and Button
