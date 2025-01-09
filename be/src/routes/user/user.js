const express = require("express");
const user = express.Router();

const pharmacistController = require("../../controllers/user/userController");

user.get("/pharmacist", pharmacistController.findPharmacistController);
user.get("/:id", pharmacistController.findUserController);

module.exports = user;
