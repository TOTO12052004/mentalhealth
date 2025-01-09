const { StatusCodes } = require("http-status-codes");
const Products = require("../../config/models/product");
const errThrower = require("../../exception/errorThrower");

const findProduct = async (id) => {
  try {
    const find = await Products.findOne({
      where: {
        id: id,
      },
    });

    if (!find) {
      throw new BaseError({
        status: StatusCodes.NOT_FOUND,
        message: "product not found",
      });
    }

    return find;
  } catch (err) {
    throw errThrower(err);
  }
};
module.exports = findProduct;
