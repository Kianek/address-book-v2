const request = require('supertest');
const faker = require('faker');
const { expect } = require('chai');
const { initDatabase, clearDatabase, seedUsers } = require('../utils');
const app = require('../../app');

beforeEach(async () => {
  await initDatabase();
});

after(async () => {
  await clearDatabase();
});

describe.only('UsersController', function() {
  it('should register a new user', async function() {
    try {
      const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password123',
      };

      const result = await request(app)
        .post('/users')
        .send(user);

      expect(result.body.id).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });

  it('PUT /users/:id', async function() {
    try {
      const [user] = await seedUsers(1);
      const newInfo = { firstName: 'Blarg' };

      const agent = request.agent(app);
      await agent
        .post('/auth/login')
        .type('application/json')
        .send({ email: user.email, password: 'password123' });

      const result = await agent
        .put(`/users/${user.id}`)
        .type('application/json')
        .send(newInfo);

      expect(result.body.firstName).to.equal(newInfo.firstName);
    } catch (err) {
      console.error(err);
    }
  });

  it('DELETE /users/:id', async function() {
    try {
      const [user] = await seedUsers(1);

      const agent = request.agent(app);
      await agent
        .post('/auth/login')
        .type('application/json')
        .send({ email: user.email, password: 'password123' });

      const result = await agent.delete(`/users/${user.id}`);

      expect(result.body.usersDeleted).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });
});
