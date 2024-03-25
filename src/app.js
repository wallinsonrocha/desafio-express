const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Routers require
const bookRoute = require('./routes/bookRoute');

// Json
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/livros', bookRoute);

module.exports = app;