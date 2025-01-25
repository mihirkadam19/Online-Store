import Product from '../models/product.model.js';
import mongoose from 'mongoose';

// get all products
export const getProducts = async(req, res) => {
    try {
        const product = await Product.find({});
        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error("error fetching all the products");
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
};


//delete a product entry
export const deleteProduct = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

    try{
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Product successfully deleted"
        });
    } catch (error){
        console.error("Product not found", error.message)
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
};


// update product
export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

    try {
        const udpatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(200).json({
            success: true,
            data: udpatedProduct
        });
    } catch (error){
        console.log("Server Error", error.message)
        return res.status(500).json({
            success: false,
            message: `Server error ${error.message}`
        });
    }
};


// create a new product entry
export const addProduct = async (req,res) => {
    const product = req.body; // User api request body

    //check if the request body is valid
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "Please enter all the fields"
        });
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        return res.status(201).json({
            success:true,
            message: "New product added",
            data: newProduct
        });
    } catch (error){
        console.error("Error creating new Product", error.message);
        return res.status(500).json({
            success:false,
            message: "Server Error, could not create a new product"
        })
    }
};