const { object , string} = require("yup");

const LoginSchema = object({
  username: string("username or email must be a string").required(
    "username or email is required"
  ),
  password: string("password must be a string").required(
    "password is required"
  )
});
module.exports = LoginSchema;
