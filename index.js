const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ 'hello': 'world' });
});

// app.get('/', (req, res) => {
// //route handler body
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`node is listening on port ${PORT}....`));
