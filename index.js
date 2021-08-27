const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./db/db");
const Course = require("./routes/course");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/course", Course);

app.listen(
  process.env.PORT,
  console.log(`Serves is running OK on port ${process.env.PORT}`)
);

dbConnection();
