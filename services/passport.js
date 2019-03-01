const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("Users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => done(null, user))
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
					console.log('user already exists')
          // we already have a document that matches the googleID.
          //call done and offer up existing user
          done(null, existingUser);
        } else {
					console.log('creating new user')
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
      console.log("profile :", profile.id);
    }
  )
);
