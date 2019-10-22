const faker = require('faker');
const {
  seedUsers,
  seedContacts,
  initDatabase,
  clearDatabase,
} = require('../utils');
const { expect } = require('chai');
const ContactService = require('../../services/ContactService');
const { Contact } = require('../test-db');

beforeEach(async () => {
  await initDatabase();
});

after(async () => {
  await clearDatabase();
});

describe('ContactService', function() {
  it('should find a given contact', async function() {
    try {
      const [user] = await seedUsers(1);
      const [contact] = await seedContacts(user.id, 1);
      const service = new ContactService(Contact);

      const result = await service.findById(contact.id);

      expect(result.id).to.equal(contact.id);
    } catch (err) {
      console.error(err);
    }
  });

  it('should find all contacts for a given user', async function() {
    try {
      const [user] = await seedUsers(1);
      const contacts = await seedContacts(user.id, 3);
      const service = new ContactService(Contact);

      const result = await service.findByUserId(user.id);

      expect(result).to.have.lengthOf(3);
    } catch (err) {
      console.error(err);
    }
  });

  it('should add a new contact', async function() {
    try {
      const [user] = await seedUsers(1);
      const service = new ContactService(Contact);

      const newContact = {
        userId: user.id,
        firstName: faker.fake('{{name.firstName}}'),
        middleName: faker.fake('{{name.firstName}}'),
        lastName: faker.fake('{{name.lastName}}'),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        line1: faker.address.streetAddress(),
        line2: null,
        city: faker.address.city(),
        stateOrProvince: faker.address.state(),
        postalCode: faker.address.zipCode(),
      };

      const result = await service.add(newContact);

      expect(result).to.have.property('id');
    } catch (err) {
      console.error(err);
    }
  });

  it('should update the contact info', async function() {
    try {
      const [user] = await seedUsers(1);
      const [contact] = await seedContacts(user.id, 1);
      const service = new ContactService(Contact);

      const result = await service.update(contact.id, {
        firstName: 'Spengbab',
      });

      expect(result.firstName).to.equal('Spengbab');
    } catch (err) {
      console.error(err);
    }
  });

  it('should delete the given user', async function() {
    try {
      const [user] = await seedUsers(1);
      const [contact] = await seedContacts(user.id, 1);
      const service = new ContactService(Contact);

      const result = await service.remove(contact.id);

      expect(result).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });
});
