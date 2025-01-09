const sequalize = require("../../config/database");
const Chat = require("../../config/models/chats");

const createChats = async (params) => {
  console.log(params);
  try {
    const { sender_id, receiver_id, message } = params;
    const transaction = await sequalize.transaction();
    const createdChat = await Chat.create({
      sender_id: sender_id,
      receiver_id: receiver_id,
      message: message,
      is_read: false,
    });
    await transaction.commit();


    return {
      status: 201,
      message: "Chat created",
      data: createdChat,
    };
  } catch (error) {
    return {
      status: error.status,
      message: error.message,
      data: [],
    };
  }
};
module.exports = createChats;
