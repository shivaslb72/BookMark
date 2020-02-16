const Booking = require("../models/booking");

module.exports.create = (req, res) => {
  const body = req.body;
  const booking = new Booking(body);
  booking
    .save()
    .then(booking => {
      res.json(booking);
    })
    .catch(err => {
      res.json(err);
    });
};
