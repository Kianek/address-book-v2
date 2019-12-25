const UserService = require('../services/UserService');
const { plainify } = require('../helpers/utils');

module.exports = function UsersController(UserModel) {
  this.createUser = async function (req, res) {
    try {
      const service = new UserService(UserModel);

      const result = await service.add(req.body);
      if (!result) return res.status(500).json({ msg: 'Unable to add user' });

      return res.sendStatus(201);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  this.updateUser = async function (req, res) {
    try {
      const service = new UserService(UserModel);
      const result = await service.update(req.params.id, req.body);

      if (!result)
        return res.status(500).json({ msg: 'Unable to update user' });

      return res.status(200).json(plainify(result));
    } catch (err) {
      return status(500).json({ msg: 'Unable to update user' });
    }
  };

  this.changePassword = async function (req, res) {
    try {
      const service = new UserService(UserModel);

      const result = await service.updatePassword(req.params.id, req.body);

      if (!result) return res.status(500).json({ msg: 'Unable to update user' });

      return res.sendStatus(200);
    } catch (err) {
      return status(500).json({ msg: 'Unable to change password' });
    }
  }

  this.deleteUser = async function (req, res) {
    try {
      const service = new UserService(UserModel);
      const result = await service.remove(req.params.id);

      if (!result) return res.status(500).json({ msg: 'Unable to find user' });

      return res.status(200).json({ usersDeleted: result });
    } catch (err) {
      return status(500).json({ msg: 'Error deleting user' });
    }
  };
};
