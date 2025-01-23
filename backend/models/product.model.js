import mongoose from "mongoose";

// creating a new model, which creates a new collection if it does not exists
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;