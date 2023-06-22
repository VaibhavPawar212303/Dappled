const express = require("express");
const path = require("path");
var cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
connectDb();

const Port = process.env.Port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
//api call
app.use("/api/build", require("./routes/buildRoutes"));
app.use(errorHandler);
app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
0;
