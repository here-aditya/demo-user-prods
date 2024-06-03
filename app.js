const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const productRoutes = require('./routes/product-routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
