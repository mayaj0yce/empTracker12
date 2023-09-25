const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'tracker_db',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
