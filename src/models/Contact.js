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
        this.setDataValue('postalCode', value.toString().ToUpperCase());
      },
    },
  });
};
