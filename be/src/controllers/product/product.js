const { StatusCodes } = require("http-status-codes");
const updateProduct = require("../../services/products/update");
const createProduct = require("../../services/products/add");
const showProduct = require("../../services/products/show");
const findProduct = require("../../services/products/findById");
const deleteById = require("../../services/products/deleteById");

const productUpdateController = async (req, res) => {
  try {
    const { id } = req.params;

    await updateProduct(id, req.body);

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "update product successfully",
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};

const createProductController = async (req, res) => {
  try {
    const response = await createProduct(req.body);

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "product successfully created",
      data: response,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: null,
    });
  }
};

const showProductController = async (req, res) => {
  try {
    const response = await showProduct();

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "product found",
      data: response,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};

const findProductController = async (req, res) => {
  try {
    const { id } = params.id;
    const response = await findProduct(id);
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "product found",
      data: response,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: null,
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "product successfully deleted",
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};
module.exports = {
  productUpdateController,
  createProductController,
  showProductController,
  findProductController,
  deleteProductController,
};
