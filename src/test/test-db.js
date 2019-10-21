const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'test-database.sqlite'),
});
const { configureSequelize } = require('../helpers/utils');

const [User, Contact] = configureSequelize(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => console.log('Connected to test DB'))
  .catch(err => console.error(err));

module.exports = {
  sequelize,
  User,
  Contact,
};
