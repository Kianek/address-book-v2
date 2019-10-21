module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contact', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2,
      },
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 2,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    line1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
      },
    },
    line2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 6,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
      },
    },
    stateOrProvince: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
      },
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
      },
      set(value) {
        this.setDataValue('postalCode', value.toString().toUpperCase());
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  });
};
