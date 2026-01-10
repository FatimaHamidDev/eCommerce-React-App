import { products as data } from "../data/products";
import ProductGrid from "../components/product/productGrid";

export default function Shop({ onAddToCart }) {
  return (
    <>
      <h2>Shop</h2>
      <br />
      <ProductGrid products={data} onAddToCart={onAddToCart} />
    </>
  );
}
