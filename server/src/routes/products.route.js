const { Router } = require("express");
const products = Router();
const {
  getAllProducts,
  createProducts,
  detailProducts,
  editProducts,
  getProductsForUser,
  deleteProducts,
} = require("../controllers/products.controllers");
const authRequired = require("../utils/authRequired");

products.get("/all", getAllProducts);
products.get("/:id", detailProducts);
products.get("/forUser", authRequired, getProductsForUser);
products.post("/create", authRequired, createProducts);
products.put("/:id", authRequired, editProducts);
products.delete("/:id", authRequired, deleteProducts);
module.exports = products;
