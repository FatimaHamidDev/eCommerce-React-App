import { products as data } from "../data/products";
import ProductGrid from "../components/product/productGrid";

export default function Shop({ onAddToCart }) {

  return (
 
    <div className="page">
      <h2>Shop</h2>
      <ProductGrid products={data} onAddToCart={onAddToCart} />
    </div>
 
  );
}
