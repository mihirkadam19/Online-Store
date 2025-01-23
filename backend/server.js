//const express = require('express');
import express from 'express';
import {connectDB} from './config/db.js';
import Product from './models/product.model.js';

const app = express();

app.use(express.json()); // allows us to accept JSON data from req.body

app.post("/api/createproducts", async (req,res) => {
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