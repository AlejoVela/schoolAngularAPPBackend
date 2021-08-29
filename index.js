const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./db/db");
const Course = require("./routes/course");
const Teacher = require("./routes/teacher");
const ClassInstitute = require("./routes/classInstitute");
const Student = require("./routes/student");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/course", Course);
app.use("/api/teacher", Teacher);
app.use("/api/class", ClassInstitute);
app.use("/api/student", Student);

app.listen(
  process.env.PORT,
  console.log(`Serves is running OK on port ${process.env.PORT}`)
);

dbConnection();
