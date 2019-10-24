const router = require('express').Router();
const passport = require('passport');
const AuthController = require('../controllers/AuthController');
const controller = new AuthController();

router.get('/test', (req, res) => res.send('Auth works'));

router.post('/login', passport.authenticate('local'), controller.login);

router.get('/logout', controller.logout);

module.exports = router;
