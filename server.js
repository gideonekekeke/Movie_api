require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { imageUpload } = require("./controller/controller");
const studentModel = require("./model/model");
const callRoute = require("./router/router");
const cors = require("cors");

const port = process.env.PORT || 8000;

// creating an object instance
const app = express();
const DB = "mongodb://localhost:MoviesDB";
//connecting to the mongodb atlass
const DB_ONLINE =
  "mongodb+srv://giddy:BqGOcPI8FD0DL2K7@cluster0.7rupp.mongodb.net/MovieDB?retryWrites=true&w=majority";

mongoose.connect(DB_ONLINE, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected successfully....");
  })
  .on("error", () => {
    console.log("there is a big fatal error here");
  });

//enabling our responds to be returned in json format
app.use(express.json());
// app.use(express.static(public));
app.use(cors());
// app.get("home.html");
app.use("/api/movies", imageUpload);
app.use("/api", callRoute);

app.listen(port, () => {
  console.log(`server is ready to listen to port: ${port}`);
});
