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

describe('ContactsController', function() {
  it('should create a new contact', async function() {
    try {
      const [user] = await seedUsers(1);
    } catch (err) {
      console.error(err);
    }
  });
});
