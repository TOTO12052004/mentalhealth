const Products = require("../../config/models/product");
const errThrower = require("../../exception/errorThrower");

const addProduct = async (params) => {
  try {
    const created = await Products.create(params);

    console.log(created);

    return {
      id: created.id,
      name: created.name,
      medicine_code: created.medicine_code,
    };
  } catch (err) {
    errThrower(err);
  }
};
module.exports = addProduct;
