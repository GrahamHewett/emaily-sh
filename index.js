const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();
passport.use(
  new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token :', accessToken);
    console.log('refresh token :', refreshToken);
    console.log('profile :', profile);
  })
);

app.get("/auth/google/", passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get("/auth/google/callback", passport.authenticate('google', {
  
}));

app.get("/", (req, res) => {
  res.send({ YO: "world" });
});

// app.get('/', (req, res) => {
// //route handler body
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`node is listening on port ${PORT}....`));