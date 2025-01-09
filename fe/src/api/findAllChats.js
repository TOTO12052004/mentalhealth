import axios from "axios";

const findAllChats = async (params) => {
    try {
        const response = await axios.get(`http://localhost:3001/v1/user/chat/sender/${params.sender_id}/receiver/${params.receiver_id}`);
        return response.data.data;
    } catch(err) {
        throw err.response
    }
}
export default findAllChats;