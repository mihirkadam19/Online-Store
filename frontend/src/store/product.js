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
            set((state)=> ({products: state.products.filter((product) => product._id !== pid )}));
            return{success: data.success , message: data.message}
        } catch(error){
            return{success: false, message:"Internal Server Error"}
        }
    },
    updateProduct: async (pid,updatedProduct) => {
        try{
            const res = await fetch(`/api/products/${pid}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });
            const data = await res.json();
            // update the ui immediately without needing a refresh
            set((state) => ({
                products: state.products.map((product) => (product._id === pid ? data.data : product))
            }));
            return {success:data.success, message:data.message};
        } catch(error){
            console.log(error)
            return{success: false, message:"Internal Servre Error"}
        }
    }
}));