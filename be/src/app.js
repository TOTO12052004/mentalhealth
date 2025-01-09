const express = require("express");
const app = express();
const cors = require('cors');

const registerRoutes = require("./routes/auth/auth");
const corsOptions = {
    origin: 'http://localhost:3000', // Origin klien Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
    credentials: true, // Jika Anda menggunakan cookie atau otorisasi
    optionsSuccessStatus: 204,
  };
  
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/auth', registerRoutes)
app.use('/v1/user', require('./routes/user/user'));
app.use('/v1/user', require('./routes/chats/chat'));
app.use('/v1/product', require('./routes/product/product'))
module.exports = app;