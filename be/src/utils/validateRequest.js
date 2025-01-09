const { StatusCodes } = require("http-status-codes");

const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      const errors = {};
      err.inner.forEach((err) => {
        const field = err.path.split('.')
        errors[field] = err.message;
      });
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: errors,
      });
    }
  };
};
module.exports = validateRequest;
