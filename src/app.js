const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());

// Configure middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    // Expires in 1 hour
    cookie: {
      maxAge: 60 * 60 * 1000,
    }
  })
);

const db = require('./config/database').sequelize;
db.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

// Initialize Passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Import routes
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

app.use('/users', users);
app.use('/contacts', contacts);
app.use('/auth', auth);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server
const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

module.exports = app;
