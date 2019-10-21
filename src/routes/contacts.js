const router = require('express').Router();

router.get('/test', (req, res) => res.send('Contacts works'));

module.exports = router;
