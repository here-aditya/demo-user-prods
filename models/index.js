const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Product = require('./product')(sequelize, Sequelize);

User.hasMany(Product);
Product.belongsTo(User);

sequelize.sync();

module.exports = {
    User,
    Product,
};
