import axios from "axios";

const postProduct = async (params) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/v1/product",
      params
    );
    return response;
  } catch (err) {
    throw err.response;
  }
};
export default postProduct;
