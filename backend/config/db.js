import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // loading the variables from the .env file

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI); //using the MONGO_URI from the .env file as connection string
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1); //1 means error, 0 means success
    }
};