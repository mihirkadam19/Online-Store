//const express = require('express');
import express from 'express';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data from req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, '0.0.0.0', () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});