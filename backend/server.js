const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const Port = process.env.Port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//api call
app.use("/api/build", require("./routes/buildRoutes"));

app.use(cors());


app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
