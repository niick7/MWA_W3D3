const mongoose = require("mongoose");
const Timesheet = mongoose.model("Timesheet");

module.exports.getTimesheets = function(req, res) {
  let count = 20;
  let offset = 0;
  if (req.body) {
    if (req.body.count)
      count = parseInt(req.body.count);
    if (req.body.offset)
      offset = parseInt(req.body.offset);
  }
  if (isNaN(count) || isNaN(offset)){
    res.status(400).json({message: "Count and offset must be number."});
    return;
  }
  Timesheet.find().exec(function(err, timesheets){
    const response = {status: 200, message: timesheets};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message)
  });
}