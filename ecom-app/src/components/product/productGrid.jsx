import ProductCard from "./productCard";

export default 

function ProductGrid({ products, onAddToCart }) {
  
  if (!products.length) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
