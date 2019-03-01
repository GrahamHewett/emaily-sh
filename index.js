const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const keys = require('./config/keys');
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize())
app.use(passport.session())


require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send({ YO: "world" });
});

// app.get('/', (req, res) => {
// //route handler body
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`node is listening on port ${PORT}....`));
