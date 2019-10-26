const request = require('supertest');
const faker = require('faker');
const { expect } = require('chai');
const {
  initDatabase,
  clearDatabase,
  seedUsers,
  seedContacts,
} = require('../utils');
const app = require('../../app');

beforeEach(async () => {
  await initDatabase();
});

after(async () => {
  await clearDatabase();
});

describe.only('ContactsController', function() {
  it('should create a new contact', async function() {
    try {
      const [user] = await seedUsers(1);

      const agent = request.agent(app);
      await agent
        .post('/auth/login')
        .type('application/json')
        .send({ email: user.email, password: 'password123' });

      const newContact = {
        userId: user.id,
        firstName: faker.name.firstName(),
        middleName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        line1: faker.address.streetAddress(),
        line2: null,
        city: faker.address.city(),
        stateOrProvince: faker.address.state(),
        postalCode: faker.address.zipCode(),
      };

      const result = await agent
        .post('/contacts')
        .type('application/json')
        .send(newContact);

      expect(result.body.firstName).to.equal(newContact.firstName);
    } catch (err) {
      console.error(err);
    }
  });

  it('should load all saved contacts', async function() {
    try {
      const [user] = await seedUsers(1);
      await seedContacts(user.id, 4);

      const agent = request.agent(app);
      await agent
        .post('/auth/login')
        .type('application/json')
        .send({ email: user.email, password: 'password123' });

      const result = await agent.get('/contacts');

      expect(result.body.length).to.equal(4);
    } catch (err) {
      console.error(err);
    }
  });

  it('should update a contact', async function() {
    try {
      const [user] = await seedUsers(1);
      const [contact] = await seedContacts(user.id, 1);

      const agent = request.agent(app);
      await agent
        .post('/auth/login')
        .type('application/json')
        .send({ email: user.email, password: 'password123' });

      const newInfo = { firstName: 'Blarble', lastName: 'McGee' };
      const result = await agent
        .put(`/contacts/${contact.id}`)
        .type('application/json')
        .send(newInfo);

      expect(result.body.firstName).to.equal(newInfo.firstName);
    } catch (err) {
      console.error(err);
    }
  });
});
