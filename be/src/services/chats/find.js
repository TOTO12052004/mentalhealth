const { Op } = require("sequelize");
const errThrower = require("../../exception/errorThrower");
const Chat = require("../../config/models/chats");

const find = async (params) => {
  const { sender_id, receiver_id } = params;
  try {
    const findChat = await Chat.findOne({
      where: {
        [Op.or]: [
          {
            sender_id: sender_id,
            receiver_id: receiver_id,
          },
          {
            sender_id: receiver_id,
            receiver_id: sender_id,
          },
        ],
      },
      order: [["created_at", "DESC"]],
    });
    return findChat;
  } catch (error) {
    throw errThrower(error);
  }
};
module.exports = find;
