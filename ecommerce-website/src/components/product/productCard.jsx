import Button from "../ui/Button";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </div>
  );
}
