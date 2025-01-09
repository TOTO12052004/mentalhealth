const { StatusCodes } = require("http-status-codes");
const findAllChat = require("../../services/chats/show");

const findAllChatController = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;
    const find = await findAllChat({
      sender_id: senderId,
      receiver_id: receiverId,
    });
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "messages found",
      data: find,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: [],
    });
  }
};

module.exports = { findAllChatController };
