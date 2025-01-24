//const express = require('express');
import express from 'express';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data from req.body

app.use("/api/product", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});