const { StatusCodes } = require("http-status-codes");
const loginService = require("../../services/auth/login");

const login = async (req, res) => {
  try {
    const response = await loginService(req.body);

    return res
      .status(StatusCodes.OK)
      .json({
        status: StatusCodes.OK,
        message: "login successfully",
        data: response,
      })
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};
module.exports = login;
