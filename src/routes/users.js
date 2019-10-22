const router = require('express').Router();
const { User } = require('../config/database');
const UserController = require('../controllers/UsersController');
const controller = new UserController(User);

router.get('/test', (req, res) => res.send('Users works'));

router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
