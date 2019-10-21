module.exports = function ContactService(ContactModel) {
  this.Contact = ContactModel;

  this.findById = async function(contactId) {
    return this.Contact.findByPk(contactId);
  };

  this.findByUserId = async function(userId) {
    return this.Contact.findAll({ where: { userId } });
  };

  this.add = async function(newContact) {
    return this.Contact.create(newContact);
  };

  this.update = async function(contactId, newInfo) {
    try {
      const contact = await this.findById(contactId);

      if (!contact) return null;

      return contact.update(newInfo);
    } catch (err) {
      return { msg: err };
    }
  };

  this.remove = async function(contactId) {
    return this.Contact.destroy({ where: { id: contactId } });
  };
};
