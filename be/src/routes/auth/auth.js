const express = require('express');
const auth = express.Router();
const registerController = require('../../controllers/auth/register');
const registerSchema = require('../../validation/auth/register');
const validateRequest = require('../../utils/validateRequest');
const LoginSchema = require('../../validation/auth/login');
const loginController = require('../../controllers/auth/login');

auth.post('/register', validateRequest(registerSchema), registerController);
auth.post('/login', validateRequest(LoginSchema), loginController);

module.exports = auth;

