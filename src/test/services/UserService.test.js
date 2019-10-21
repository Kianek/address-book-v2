const faker = require('faker');
const { seedUsers, initDatabase, clearDatabase } = require('../utils');
const { expect } = require('chai');
const UserService = require('../../services/UserService');
const { User } = require('../test-db');

beforeEach(async () => {
  await initDatabase();
});

after(async () => {
  await clearDatabase();
});

describe('UserService', function() {
  it('should create a new user', async function() {
    try {
      const service = new UserService(User);
      const result = await service.add({
        firstName: faker.fake('{{name.firstName}}'),
        lastName: faker.fake('{{name.lastName}}'),
        email: faker.fake('{{internet.email}}'),
        passwordHash: faker.fake('{{internet.password}}'),
      });

      expect(result.id).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });
});
