import Link from "next/link";
import { getProduct } from "../../utils/api";
import Deletebtn from "@/app/components/deletebtn";
export default async function ProductDetails({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    
    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-details">
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p className="PriceP">Price: ${product.price}</p>
                    </div>
                    <div className="button-container">
                        <button className="red-button" onClick={console.log('Add to cart functionality here')}>Add to Cart</button>
                        <Link href={`/product/edit/${product.id}`}>
                            <button className="red-button">Edit Item</button>
                        </Link>
                        <Deletebtn id={product.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
