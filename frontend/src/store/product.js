import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createNewProduct: async (newProduct) => {
        try{
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
        } catch(error){
            return {success: false, message: "Internal Server Error"};
        }
        
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products: data.data});
    },
    deleteProduct: async(pid) => {
        try{
            const res = await fetch(`api/products/${pid}`,{
                method: "DELETE"
            })
            const data = await res.json();
            return{success: data.success , message: data.message}
        } catch(error){
            console.log(false,"oh no");
            return{success: false, message:"Internal Server Error"}
        }
    }
}));