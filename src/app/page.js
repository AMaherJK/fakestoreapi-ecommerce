import { getProducts } from "./utils/api";
import Link from "next/link";
import "./globals.css";
import ProductCard from "./components/ProductCard";
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="container">
      <Link href={`product/new`}>
        <button className="White-Button">Add Product</button>
      </Link>

      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} >
            <ProductCard product={product} />
          </div>))}
      </div>
    </div>
  );
}
