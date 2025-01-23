//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
console.log(process.env.MONGO_URI);

app.get("/", (req,res) => {
    res.send("Server is ready!");
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});