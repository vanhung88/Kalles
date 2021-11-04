import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controller/productsController.js";

// INDEX ROUTE : /api/product

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
