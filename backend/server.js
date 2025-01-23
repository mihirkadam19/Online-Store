//const express = require('express');
import express from 'express';
import {connectDB} from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json()); // allows us to accept JSON data from req.body

// update product
app.put("/api/product/:id", async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

    try {
        const udpatedProduct = Product.findByIdAndUpdate(id, product, {new: true});
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
});

// get all products
app.get("/api/product/", async(req, res) => {
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
});


//delete a product entry
app.delete("/api/product/:id", async(req, res) => {
    const {id} = req.params;

    try{
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Product successfully deleted"
        });
    } catch (error){
        console.error("Product not found", error.message)
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }
});


// create a new product entry
app.post("/api/product", async (req,res) => {
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
            message: "New product added"
        });
    } catch (error){
        console.error("Error creating new Product", error.message);
        return res.status(500).json({
            success:false,
            message: "Server Error, could not create a new product"
        })
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});