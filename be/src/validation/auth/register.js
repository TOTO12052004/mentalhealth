const { object, string } = require("yup");

const registerSchema = object({
  fullname: string("fullname must be a string").required(
    "fullname is required"
  ),
  username: string("username must be a string").required(
    "username is required"
  ),
  email: string("email must be a string")
    .email("invalid email format")
    .required("email is required"),
  address: string("address must be a string").required("address is required"),
  phone_number: string("phone number must be a string")
    .required("phone number is required")
    .matches(/^(?:\+62|0)8[1-9][0-9]{6,13}$/, {
      message: "invalid phone number format",
    })
    .min(6)
    .max(13),
  password: string("password must be a string").required(
    "password is required"
  ),
  confirm_password: string("confirm password must be a string").required(
    "confirm password is required"
  ),
});
module.exports = registerSchema;
