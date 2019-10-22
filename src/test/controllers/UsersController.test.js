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

describe('UsersController', function() {
  it('POST /users', async function() {
    try {
      const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        passwordHash: 'password123',
      };

      const result = await request(app)
        .post('/users')
        .send(newUser);

      expect(result.body.id).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });

  it('PUT /users/:id', async function() {
    try {
      const [user] = await seedUsers(1);
      const newInfo = { firstName: 'Blarg' };

      const result = await request(app)
        .put(`/users/${user.id}`)
        .send(newInfo);

      expect(result.body.firstName).to.equal(newInfo.firstName);
    } catch (err) {
      console.error(err);
    }
  });

  it('DELETE /users/:id', async function() {
    try {
      const [user] = await seedUsers(1);

      const result = await request(app).delete(`/users/${user.id}`);

      expect(result.body.usersDeleted).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });
});
