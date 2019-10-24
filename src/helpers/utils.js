const bcrypt = require('bcryptjs');

// Determine which configured models to load based on development environment
function loadModels() {
  if (process.env.PRODUCTION === true) {
    return ({ User, Contact } = require('../config/database'));
  } else {
    return ({ User, Contact } = require('../test/test-db'));
  }
}

function plainify(model) {
  if (!model) return null;

  return model.get({ plain: true });
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }

  return res.status(403).json({ msg: 'Not authorized' });
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
  loadModels,
  plainify,
  configureSequelize,
  hashPassword,
  comparePasswords,
  ensureAuthenticated,
};
