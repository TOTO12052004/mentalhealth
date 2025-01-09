const {Sequelize} = require("sequelize");

const sequalize = new Sequelize('apotek', 'root', 'rootpassword', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequalize;

