const path = require('path');
const { configureSequelize } = require('../helpers/utils');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(process.cwd(), 'database.sqlite'),
});

const [User, Contact] = configureSequelize(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
  Contact,
};
