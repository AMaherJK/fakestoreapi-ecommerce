const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const res = await fetch(API_URL, { cache: "no-store" }); 
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
};