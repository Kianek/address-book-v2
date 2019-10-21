const bcrypt = require('bcryptjs');

function plainify(model) {
  if (!model) return null;

  return model.get({ plain: true });
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePasswords(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function configureSequelize(sequelize, DataTypes) {
  const User = require('../models/User')(sequelize, DataTypes);
  const Contact = require('../models/Contact')(sequelize, DataTypes);

  User.hasMany(Contact);

  sequelize.sync({ force: true, logging: false });

  return [User, Contact];
}

module.exports = {
  plainify,
  configureSequelize,
  hashPassword,
  comparePasswords,
};
