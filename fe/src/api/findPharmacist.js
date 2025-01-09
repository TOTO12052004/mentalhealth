import axios from "axios";

const findPharmacist = async () => {
  try {
    const response = await axios.get("http://localhost:3001/v1/user/pharmacist");
    return response.data.data;
  } catch (err) {
    throw err.response;
  }
};
export default findPharmacist;
