//const express = require('express');
import express from 'express';
import {connectDB} from './config/db.js';
import router from './routes/product.route.js';
import productRoutes from './routes/product.route.js';

const app = express();

app.use(express.json()); // allows us to accept JSON data from req.body

app.use("/api/product", productRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});