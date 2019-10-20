const router = require('express').Router();

router.get('/test', (req, res) => res.send('Auth works'));

router.post('/login', (req, res) => {});
router.get('/logout', (req, res) => {});

module.exports = router;
