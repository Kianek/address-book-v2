const { hashPassword } = require('../helpers/utils');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: [8, 20],
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.passwordHash = hashPassword(user.passwordHash);
        },
      },
    }
  );
};
