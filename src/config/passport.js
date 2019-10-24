const LocalStrategy = require('passport-local').Strategy;
const { loadModels, comparePasswords } = require('../helpers/utils');
const { User } = loadModels();

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, function(
      email,
      password,
      done
    ) {
      User.findOne({ where: { email } }, function(err, user) {
        if (err) return done(err);

        if (!user || !comparePasswords(password, user.passwordHash)) {
          return done(null, false, { msg: 'Invalid credentials' });
        }

        return done(null, user);
      });
    })
  );

  // serialize
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // deserialize
  passport.deserializeUser(function(id, done) {
    User.findByPk(id, function(err, user) {
      done(err, user);
    });
  });

  return passport;
};
