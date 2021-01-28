const mongoose = require("mongoose");

const qrCodeSchema = mongoose.Schema({
  imgURL: {
    type: Boolean,
    required: true
  },
  dateOn: {
    type: Date,
    required: true
  }
});

mongoose.model("QRCode", qrCodeSchema, "qr_codes");