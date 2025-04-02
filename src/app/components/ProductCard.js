import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="card">
        <img src={product.image} alt={product.title} className="product-img" />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <div>
          <button className="Blue-Button">View Details</button>
        </div>
      </div>
    </Link>
  );
}
