const { User, Contact, sequelize } = require('./test-db');
const faker = require('faker');

async function initDatabase() {
  await sequelize.sync({ force: true, logging: false });
}

async function clearDatabase() {
  await sequelize.drop();
}

async function closeDatabase() {
  await sequelize.close();
}

async function seedUsers(numOfUsers) {
  const users = [];
  for (let i = 0; i < numOfUsers; i++) {
    users.push(
      User.create({
        email: faker.fake('{{internet.email}}'),
        firstName: faker.fake('{{name.firstName}}'),
        lastName: faker.fake('{{name.lastName}}'),
        passwordHash: 'password123',
      })
    );
  }

  return Promise.all(users);
}

async function seedContacts(userId, numOfContacts) {
  const contacts = [];
  for (let i = 0; i < numOfContacts; i++) {
    contacts.push(
      Contact.create({
        userId,
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
      })
    );
  }

  return Promise.all(contacts);
}

module.exports = {
  seedUsers,
  seedContacts,
  initDatabase,
  clearDatabase,
  closeDatabase,
};
