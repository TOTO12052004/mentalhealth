const express = require("express");
const product = express.Router();
const productController = require("../../controllers/product/product");
const validateRequest = require("../../utils/validateRequest");
const createProductSchema = require("../../validation/product/create");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

product.use(express.static(path.join(__dirname, 'public'))); 
product.post("", upload.single('image'), (req, res) => {
  console.log(req.file)
});
product.post(
  "",
  validateRequest(createProductSchema),
  upload.single("image"),
  productController.createProductController
);
product.delete("/:id", productController.deleteProductController);
product.get("", productController.showProductController);
product.get("/:id", productController.findProductController);
product.put("/:id", productController.productUpdateController);

module.exports = product;
