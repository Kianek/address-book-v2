const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Configure middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require('./config/database').sequelize;
db.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

module.exports = app;
