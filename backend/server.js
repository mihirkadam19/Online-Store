//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';

const app = express();

dotenv.config(); // loading the variables from the .env file


app.get("/", (req,res) => {
    res.send("Server is ready!");
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});