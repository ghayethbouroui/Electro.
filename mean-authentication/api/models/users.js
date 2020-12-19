const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

mongoose.model('User', userSchema);
const crypto = require('crypto');
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
  };
  userSchema.methods.validPassword = function(password) {
    const hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
    return this.hash === hash;
  };

  userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000)
      },
      'MY_SECRET'
    ); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email'
      },
      function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          // Return if user not found in database
          if (!user) {
            return done(null, false, {
              message: 'User not found'
            });
          }
          // Return if password is wrong
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: 'Password is wrong'
            });
          }
          // If credentials are correct, return the user object
          return done(null, user);
        });
      }
    )
  );
  