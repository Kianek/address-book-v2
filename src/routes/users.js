const router = require('express').Router();
const { User } = require('../config/database');
const { ensureAuthenticated } = require('../helpers/utils');
const UserController = require('../controllers/UsersController');
const controller = new UserController(User);

router.get('/test', (req, res) => res.send('Users works'));

router.post('/', controller.createUser);

router.put('/:id', ensureAuthenticated, controller.updateUser);

router.delete('/:id', ensureAuthenticated, controller.deleteUser);

module.exports = router;
