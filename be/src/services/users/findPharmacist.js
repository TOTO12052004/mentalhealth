const { StatusCodes } = require("http-status-codes");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");
const User = require("../../config/models/user");

const findPharmacist = async () => {
  try {
    const find = await User.findAll({
      where: {
        role: "apoteker",
      },
    });

    if (find.length <= 0) {
      throw new BaseError({
        status: StatusCodes.NOT_FOUND,
        message: "pharmacist not found",
      });
    }
    return find;
  } catch (err) {
    throw errThrower(err);
  }
};
module.exports = findPharmacist;
