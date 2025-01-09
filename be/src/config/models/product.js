const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Im/ Import instance Sequelize Anda

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    medicine_code: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stok: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0,
      },
    },
    image: {
      type: DataTypes.STRING
    },
    satuan: {
      type: DataTypes.STRING,
    },
    expired_at: {
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "Product",
    tableName: "products",
    timestamps: true,
    underscored: true,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("products table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Products;
