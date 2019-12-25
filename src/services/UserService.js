module.exports = function UserService(UserModel) {
  this.User = UserModel;

  this.findById = async function (id) {
    return this.User.findByPk(id);
  };

  this.findByEmail = async function (email) {
    return this.User.findOne({ where: { email } });
  };

  this.add = async function ({ firstName, lastName, email, password }) {
    return await this.User.create({
      firstName,
      lastName,
      email,
      passwordHash: password,
    });
  };

  this.update = async function (id, newInfo) {
    try {
      const user = await this.User.findByPk(id);

      if (!user) return null;

      return user.update(newInfo);
    } catch (err) {
      return { msg: err };
    }
  };

  this.updatePassword = async function (id, newInfo) {
    try {
      const user = await this.User.findByPk(id);

      if (!user) return null;

      const hashPassword = require('../helpers/utils').hashPassword;
      newInfo.passwordHash = hashPassword(newInfo.passwordHash);

      return user.update(newInfo);
    } catch (err) {
      return { msg: err };
    }
  }

  this.remove = async function (id) {
    return this.User.destroy({ where: { id } });
  };
};
