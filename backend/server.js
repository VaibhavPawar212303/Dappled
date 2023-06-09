const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware")
const connectDb = require('./config/db');
connectDb();

const Port = process.env.Port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//api call
app.use("/api/build", require("./routes/buildRoutes"));
app.use(errorHandler)

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
