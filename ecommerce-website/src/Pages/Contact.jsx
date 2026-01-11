import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function Contact() {

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="page">
      <h2>Contact Us</h2>
      <p>Have a question or project in mind? Let’s talk.</p>


      <label htmlFor="name">Full Name</label>
      <Input
        value={name}
        onChange={setName}
        placeholder="Enter your name"
      />
      
      <label htmlFor="email">Email</label>
      <Input
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />

      <label htmlFor="message">Your Message</label>
      <Input
        value={message}
        onChange={setMessage}
        placeholder="Your message"
      />

      <Button>Send Message</Button>
    
    </section>
  );
}
