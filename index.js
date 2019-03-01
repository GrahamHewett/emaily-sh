const express = require("express");
require("./services/passport");
const mongoose = require("mongoose");

const app = express();
require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  res.send({ YO: "world" });
});

// app.get('/', (req, res) => {
// //route handler body
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`node is listening on port ${PORT}....`));
