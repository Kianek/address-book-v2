const UserService = require('../services/UserService');
const { plainify } = require('../helpers/utils');

module.exports = function UsersController(UserModel) {
  this.createUser = async function(req, res) {
    try {
      const service = new UserService(UserModel);

      const result = await service.add(req.body);
      if (!user) return res.status(500).json({ msg: 'Unable to add user' });

      return res.status(201).json(plainify(result));
    } catch (err) {
      return res.status(500).json({ msg: 'Unable to add user' });
    }
  };

  this.updateUser = async function(req, res) {
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

  this.deleteUser = async function(req, res) {
    try {
      const service = new UserService(UserModel);
      const result = await service.remove(req.params.id);

      if (!result)
        return res.status(500).json({ msg: 'Unable to delete user' });

      return res.status(204).json(result);
    } catch (err) {
      return status(500).json({ msg: 'Unable to update user' });
    }
  };
};
