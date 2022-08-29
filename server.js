
//require express, connection, routes
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//create port for localhost and wake up express for use
const PORT = process.env.PORT || 3001;
const app = express();

//instruct app to use express and routes with specifics
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//print to console once db connects
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
