module.exports.generate = function(req, res) {
  // Do steps for generating QR Codes
  // I don't know which approach professor want student to do
  // Then I leave it now and back when we have clear approach.
  res.status(200).json({message: "Ok"});
}

module.exports.validate = function(req, res) {
  // Same for generate feature
  res.status(200).json({message: "Ok"});
}