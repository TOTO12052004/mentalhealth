const express = require('express');
const chat = express.Router();
const chatController = require('../../controllers/chat/chatController');


chat.get('/chat/sender/:senderId/receiver/:receiverId', chatController.findAllChatController);

module.exports = chat;