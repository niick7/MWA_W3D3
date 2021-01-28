const mongoose = require("mongoose");
const dbURL = "mongodb://locahost:27017/StudentsDB";

mongoose.connect(dbURL, {});

mongoose.connection.on("connected", function(){
  console.log("MongoDB connected.");
});
mongoose.connection.on("disconnected", function(){
  console.log("MongoDB connected.");
});