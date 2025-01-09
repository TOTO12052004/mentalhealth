const { DataTypes } = require('sequelize');
const sequelize = require('../database'); 
const User = require('./user');

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  receiver_id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'chats',
  timestamps: false, 
  underscored: true,
});

Chat.belongsTo(User, { foreignKey: 'sender_id', as: 'sender' });
Chat.belongsTo(User, { foreignKey: 'receiver_id', as: 'receiver' });



module.exports = Chat;