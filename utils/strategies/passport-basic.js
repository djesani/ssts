const passport = require('passport');
const { BasicStrategy } = require('passport-http');

passport.use(new BasicStrategy(
  function(userId, password, done) {
    // User.findOne({ username: userid }, function (err, user) {
      // if (err) { return done(err); }
      // if (!user) { return done(null, false); }
      // if (!user.verifyPassword(password)) { return done(null, false); }
      console.log(`Got userId: ${userId}; password: ${password}`);
      const user = { userId, password };
      return done(null, user);
    // });
  }
));

module.exports = passport;
