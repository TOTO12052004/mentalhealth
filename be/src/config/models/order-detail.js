const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Order = require("./order");
const Products = require("./product");

const orderDetails = sequelize.define(
  "order_details",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "OrderDetail",
    tableName: "order_details",
    timestamps: false,
  }
);

orderDetails.belongsTo(Order, { foreignKey: "order_id" });
orderDetails.belongsTo(Products, { foreignKey: "product_id" });

module.exports = orderDetails;
