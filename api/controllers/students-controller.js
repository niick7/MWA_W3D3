const mongoose = require("mongoose");
const Student = mongoose.model("Student");

module.exports.getStudents = function(req, res) {
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
  Student.find().exec(function(err, students){
    const response = {status: 200, message: students};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message)
  });
}

module.exports.createStudent = function(req, res) {
  newStudent = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  Student.create(newStudent, function(err, student){
    response = {status: 201, message: student};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.getStudent = function(req, res) {
  const studentId = req.params.studentId;
  Student.findById(studentId).exec(function(err, student){
    response = {status: 200, message: student};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    if (!student) {
      response.status = 404;
      response.message = {message: "Student ID is invalid."};
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.updateStudent = function(req, res) {
  const studentId = req.params.studentId;
  Student.findById(studentId).exec(function(err, student){
    response = {status: 204, message: "Updated student successfully."};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    if (!student) {
      response.status = 404;
      response.message = {message: "Student ID is invalid."};
    }
    if (response.status != 204) {
      res.status(response.status).json(response.message);
      return;
    }

    student.email = req.body.email;
    student.password = req.body.password;
    student.first_name = req.body.first_name;
    student.last_name = req.body.last_name;

    student.save(function(updatedErr, updatedStudent){
      if (updatedErr) {
        response.status = 500;
        response.message = updatedErr;
      }
      res.status(response.status).json(response.message);
    })
  })
}

module.exports.deleteStudent = function(req, res) {
  const studentId = req.params.studentId;
  Student.findByIdAndDelete(studentId).exec(function(err, student){
    response = {status: 204, message: "Deleted student successfully."};
    if (err) {
      response.status = 500;
      response.message = err;
    }
    if (!student) {
      response.status = 404;
      response.message = {message: "Student ID is invalid."};
    }
    res.status(response.status).json(response.message);
  })
}