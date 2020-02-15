const passport = require('passport');
const { BasicStrategy } = require('passport-http');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new BasicStrategy(
  function(username, password, done) {
    // User.findOne({ username: userid }, function (err, user) {
      // if (err) { return done(err); }
      // if (!user) { return done(null, false); }
      // if (!user.verifyPassword(password)) { return done(null, false); }
      console.log(`Got username: ${username}; password: ${password}`);
      const user = { username, password };
      return done(null, user);
    // });
  }
));

module.exports = passport;
