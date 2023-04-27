const express = require("express");
const config = require("../config");
const PORT = config.port;
// TODO: import router from routes/
const router = require("../routes/characterRoutes");
const logger = require("../middleware/middle.log")

const app = express();

app.use(express.json());

 app.use('/', router);

// app.use();

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});