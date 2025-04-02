"use client"
import { useRouter } from "next/navigation";
import { deleteProduct } from "../utils/api";

export default function Deletebtn({ id }) {
    const router = useRouter();

    async function handleDelete() {
        if (!id) return;
        try {
            await deleteProduct(id);
            console.log("Deleted product:", id);
            router.push("/"); // Redirect to home after deletion
        } catch (error) {
            console.error("Failed to delete product:", error.message);
        }
    }

    return (
        <button className="red-button" onClick={handleDelete}>Delete</button>
    );
}
