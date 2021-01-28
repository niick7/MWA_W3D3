const mongoose = require("mongoose");

const timeSheetSchema = mongoose.Schema({
  student: {
    type: String,
    required: true
  },
  isPresent: {
    type: Boolean,
    required: true
  },
  dateOn: {
    type: Date,
    required: true
  }
});

mongoose.model("Timesheet", timeSheetSchema, "timesheets");