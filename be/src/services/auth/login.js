const { StatusCodes } = require("http-status-codes");
const User = require("../../config/models/user");
const { generateJwt } = require("../../utils/jwt");
const errThrower = require("../../exception/errorThrower");
const BaseError = require("../../exception/BaseError");

const login = async (params) => {
  try {
    const { username, password } = params;

    const findUserByUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!findUserByUsername) {
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: `username or password is wrong`,
      });
    }

    const comparePassword = await findUserByUsername.comparePassword(password);
    if (!comparePassword) {
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: `username or password is wrong`,
      });
    }

    const token = await generateJwt({
      id: findUserByUsername.id,
      role: findUserByUsername.role,
      username: findUserByUsername.username,
      fullname: findUserByUsername.fullname,
    });

    return {
      token: token,
    };
  } catch (error) {
    throw errThrower(error);
  }
};
module.exports = login;
