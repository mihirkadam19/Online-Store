import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createNewProduct: async (newProduct) => {
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        const apiResponse = await res.json();
        set((state) => ({products: [...state.products, apiResponse.data]}));
        return {success: apiResponse.success, message: apiResponse.message}
    }
}));