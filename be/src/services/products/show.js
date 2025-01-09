const { StatusCodes } = require("http-status-codes");
const Products = require("../../config/models/product");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");

const showProduct = async () => {
    try {
        const products = await Products.findAll({
            attributes: ["id", "name", "image"]
        })

        if(products.length <= 0) {
            throw new BaseError({
                status: StatusCodes.OK,
                message: 'medicine not found'
            });
        }

        return products;
    } catch(err) {
        errThrower(err);
    }
}
module.exports = showProduct;