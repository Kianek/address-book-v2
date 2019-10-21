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
        passwordHash: faker.fake('{{internet.password}}'),
      })
    );
  }

  return Promise.all(users);
}

module.exports = {
  seedUsers,
  initDatabase,
  clearDatabase,
  closeDatabase,
};
