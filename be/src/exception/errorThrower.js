const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError")

const errThrower = (err) => {
    if(err instanceof BaseError) {
        throw err;
    }

    throw new BaseError({
        statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'an internal server error' 
    });
}
module.exports = errThrower;