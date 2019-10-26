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
        password: 'password12345',
      });

      expect(result.id).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });

  it('should find the user by ID', async function() {
    try {
      const [user] = await seedUsers(1);
      const service = new UserService(User);

      const result = await service.findById(user.id);

      expect(result.id).to.equal(user.id);
    } catch (err) {
      console.error(err);
    }
  });

  it('should find the user by email', async function() {
    try {
      const [user] = await seedUsers(1);
      const service = new UserService(User);

      const result = await service.findByEmail(user.email);

      expect(result.email).to.equal(user.email);
    } catch (err) {
      console.error(err);
    }
  });

  it('should update the user info', async function() {
    try {
      const [user] = await seedUsers(1);
      const service = new UserService(User);

      const result = await service.update(user.id, { firstName: 'Schlarple' });

      expect(result.firstName).to.equal('Schlarple');
    } catch (err) {
      console.error(err);
    }
  });

  it('should delete a given user', async function() {
    try {
      const [user] = await seedUsers(1);
      const service = new UserService(User);

      const result = await service.remove(user.id);

      expect(result).to.equal(1);
    } catch (err) {
      console.error(err);
    }
  });
});
