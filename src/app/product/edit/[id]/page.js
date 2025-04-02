"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";  
import { getProduct, updateProduct } from "../../../utils/api";
export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        image: "",
        price: "",
        description: "",
    });
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const fetchedProduct = await getProduct(id);
                    setProduct(fetchedProduct);
                } catch (error) {
                    console.error("Error fetching product:", error);
                } 
            };

            fetchProduct();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, price: parseFloat(product.price) };
        try {
            const updatedData = await updateProduct(id, updatedProduct);
            setMessage("Product updated successfully!");
            console.log("Updated Product:", updatedData);
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };


    return (
        <div className="form-page">
            <div className="form-container">
            <h1>Edit Product</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        required
                    />
                </div>
                <div className="input">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="url"
                        id="image"
                        value={product.image}
                        onChange={(e) => setProduct({ ...product, image: e.target.value })}
                        required
                    />
                </div>
                <div className="input">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        required
                    />
                </div>
                <div className="input">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={product.description}
                        onChange={(e) =>
                            setProduct({ ...product, description: e.target.value })
                        }
                        required
                    ></textarea>
                </div>
                <button className="red-button" type="submit">Update Product</button>
            </form>
            </div>
        </div>
    );
}
