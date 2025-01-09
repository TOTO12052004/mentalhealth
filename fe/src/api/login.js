import axios from "axios";

const login = async (request) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/v1/auth/login",
      request
    );
    return response;
  } catch (err) {
    throw err.response;
  }
};
export default login;
