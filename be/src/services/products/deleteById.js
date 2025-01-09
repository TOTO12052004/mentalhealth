const { StatusCodes } = require("http-status-codes");
const Products = require("../../config/models/product");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");

const deleteById = async (id) => {
  try {
    const deleted = new Products.destroy({
      where: {
        id: id,
      },
    });

    if (deleted) {
      return true;
    }
    throw new BaseError({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      messge: "an internal server error",
    });
  } catch (err) {
    throw errThrower(err);
  }
};
module.exports = deleteById;
