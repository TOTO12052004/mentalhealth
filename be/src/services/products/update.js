const { StatusCodes } = require("http-status-codes");
const Products = require("../../config/models/product");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");

const updateProduct = async (id, params) => {
    try {
        const updated = await Products.update(params, {
            where: {
                id:id
            }
        });

        if(updated > 0) {
            return true;
        }
        throw new BaseError({
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: 'an internal server error'
        })
    } catch(err) {
        throw errThrower(err);
    }
}
module.exports = updateProduct;