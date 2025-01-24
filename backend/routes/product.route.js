import express from "express";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.put("/:id", updateProduct)
router.get("/", getProducts)
router.delete("/:id", deleteProduct)
router.post("/", addProduct)

export default router;