const router = require('express').Router();
const ContactsController = require('../controllers/ContactsController');
const { ensureAuthenticated } = require('../helpers/utils');
const { loadModels } = require('../helpers/utils');
const { Contact } = loadModels();
const controller = new ContactsController(Contact);

router.get('/test', (req, res) => res.send('Contacts works'));

router.get('/', ensureAuthenticated, controller.getAllContacts);

router.post('/', ensureAuthenticated, controller.createContact);

router.put('/:id', ensureAuthenticated, controller.updateContact);

router.delete('/:id', ensureAuthenticated, controller.deleteContact);

module.exports = router;
