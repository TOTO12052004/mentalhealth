const { StatusCodes } = require("http-status-codes");
const registerService = require("../../services/auth/register");
const { generateJwt } = require("../../utils/jwt");

const register = async (req, res) => {
  try {
    const response = await registerService(req.body);

    const token = generateJwt(response);

    return res.json({
      status: StatusCodes.CREATED,
      message: "user created successfully",
      data: {
        token: token,
      },
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};
module.exports = register;
