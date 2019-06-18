const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
//const businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/afproject", { useNewUrlParser: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/business', businessRoute);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
