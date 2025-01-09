import axios from "axios";

const register = async (request) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/v1/auth/register",
      request
    );

    return response;
  } catch (err) {
    throw err.response;
  }
};
export default register;
