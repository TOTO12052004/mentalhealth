const { StatusCodes } = require("http-status-codes");
const findPharmacist = require("../../services/users/findPharmacist");
const findUser = require("../../services/users/findUser");

const findPharmacistController = async (req, res) => {
  try {
    const find = await findPharmacist();
    return res
      .json({
        status: StatusCodes.OK,
        message: "Data found",
        data: find,
      })
      .status(StatusCodes.OK);
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: [],
    });
  }
};

const findUserController= async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await findUser(id);

    console.log(response);

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "user found",
      data: response,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};

module.exports = { findPharmacistController, findUserController };
