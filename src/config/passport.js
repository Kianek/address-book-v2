const LocalStrategy = require('passport-local').Strategy;
const { comparePasswords } = require('../helpers/utils');
const { User } = require('./database');

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, function(
      email,
      password,
      done
    ) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user || !comparePasswords(password, user.passwordHash))
            return done(null, false, { msg: 'Invalid credentials' });

          return done(null, user);
        })
        .catch(err => console.error(err));
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findByPk(id)
      .then(user => done(null, user))
      .catch(err => done(err));
  });
};
