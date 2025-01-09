const { StatusCodes } = require("http-status-codes");
const BaseError = require("../../exception/BaseError");

const Chat = require("../../config/models/chats");
const errThrower = require("../../exception/errorThrower");
const { Op } = require("sequelize");

const show = async (params) => {
  console.log(params);
  try {
    const { sender_id, receiver_id } = params;

    const findChat = await Chat.findAll({
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
      order: [["created_at", "ASC"]],
    });

    if (!findChat) {
      throw new BaseError({
        status: StatusCodes.NOT_FOUND,
        message: "message not found",
      });
    }

    return findChat;
  } catch (error) {
    throw errThrower(error);
  }
};
module.exports = show;
