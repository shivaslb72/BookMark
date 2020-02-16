const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require("validator");

const bookingSchema = new Schema({
  title: {
    type: String
  },
  startDate: {
    type: Date,
    default: new Date(),
    required: true
  },
  endDate: {
    type: Date,
    required: true,
    default: new Date(),
    validate: [dateValidator, "Start Date must be less than End Date"]
  }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

// function that validate the startDate and endDate
function dateValidator(value) {
  return this.startDate <= value;
}
