const sequalize = require("../../config/database");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");
const User = require("../../config/models/user");

const register = async (req) => {
  try {
    const transasction = await sequalize.transaction();
    const {
      fullname,
      username,
      email,
      phone_number,
      password,
      confirm_password,
      role,
    } = req;

    const findUserByUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    if (findUserByUsername) {
      throw new BaseError({
        status: 400,
        message: `username already exists`,
      });
    }

    const findUserByPhoneNumber = await User.findOne({
      where: {
        phone_number: phone_number,
      },
    });

    if (findUserByPhoneNumber) {
      throw new BaseError({
        status: 400,
        message: `phone number already exists`,
      });
    }

    const findUserByEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (findUserByEmail) {
      throw new BaseError({
        status: 400,
        message: `email already exists`,
      });
    }

    if (password !== confirm_password) {
      throw new BaseError({
        status: 400,
        message: "password doesn't match",
      });
    }

    const insertedUser = await User.create({
      username,
      fullname,
      password,
      phone_number,
      email,
      password,
      role: role ? "apoteker" : "user",
    });

    await transasction.commit();

    return {
      username: insertedUser.username,
      fullname: insertedUser.fullname,
      role: insertedUser.role,
    };
  } catch (error) {
    throw errThrower(error);
  }
};
module.exports = register;
