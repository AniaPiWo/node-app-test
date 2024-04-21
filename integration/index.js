const db = require("./db");
const app = require("./app");

require("dotenv").config();

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;

db.connect(HOST)
  .then(() => {
    console.log("DB Connnected");
    app.listen(PORT, () => {
      console.log(`Listeni on ${PORT}`);
    });
  })
  .catch(() => {
    console.log("db error");
  });
