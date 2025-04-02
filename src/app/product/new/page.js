"use client";
import { useState } from "react";
import { createProduct } from "../../utils/api";

export default function AddProduct() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { title, image, price: parseFloat(price), description };

    try {
      const createdProduct = await createProduct(newProduct);
      setMessage("Product added successfully!");
      console.log("Created Product:", createdProduct);
      setTitle("");
      setImage("");
      setPrice("");
      setDescription("");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Add New Product</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="image">Image URL:</label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="red-button" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}
