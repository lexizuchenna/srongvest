const LocalStrategy = require("passport-local").Strategy;
const Users = require("../models/Users");
const bcrypt = require('bcryptjs')

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      Users.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: "Email does not exist" });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (!isMatch) return done(null, false, { msg: "Incorrect password" });
        });
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    Users.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
