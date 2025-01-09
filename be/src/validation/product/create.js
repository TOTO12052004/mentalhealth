const { object, string, number } = require("yup");

const createProductSchema = object({
  name: string("product name must be a string").required(
    "product name is required"
  ),
  medicine_code: string("medicine code must be a string").required(
    "medicine code is required"
  ),
  description: string("description must be a string").required(
    "description is required"
  ),
  category: string("category must be a string").required(
    "category is required"
  ),
  price: number("price must be a number").required("price is required"),
  stok: number("stok must be a number").required("stok is required"),
  satuan: string("satuan must be a string").required("satuan is required"),
});

module.exports = createProductSchema;
