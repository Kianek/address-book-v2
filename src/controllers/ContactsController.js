const ContactService = require('../services/ContactService');

module.exports = function ContactsController(ContactModel) {
  this.getAllContacts = async function(req, res) {
    try {
      const service = new ContactService(ContactModel);

      const result = await service.findByUserId(req.user.id);

      if (!result)
        return res.status(500).json({ msg: 'Unable to load contacts' });

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  this.createContact = async function(req, res) {
    try {
      const service = new ContactService(ContactModel);

      const result = await service.add(req.body);

      if (!result)
        return res.status(500).json({ msg: 'Unable to create contact' });

      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  this.updateContact = async function(req, res) {
    try {
      const service = new ContactService(ContactModel);

      const result = await service.update(req.params.id, req.body);

      if (!result)
        return res.status(500).json({ msg: 'Unable to update contact' });

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  this.deleteContact = async function(req, res) {
    try {
      const service = new ContactService(ContactModel);

      const result = await service.remove(req.params.id);

      if (!result)
        return res.status(500).json({ msg: 'Unable to delete contact' });

      return res.status(200).json({ contactsDeleted: result });
    } catch (err) {
      return res.status(500).json(err);
    }
  };
};
