const db = require("../db");
const connection = db.connection();

exports.Booking = (req, res) => {
  const { id, date } = req.body;
  console.log(id, date);

  async function getBooking() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM booking WHERE BOOKING_DATE=? AND MAHAL_ID=?",
        [date, id],
        (err, result) => {
          if (err) {
            reject(err);
            console.log(err);
          }
          if (result.length <= 0) {
            console.log(result);
            resolve(result);
          } else {
            reject("No data found");
          }
        }
      );
    });
  }

  getBooking()
    .then((result) => res.status(200).json({ Data: result }))
    .catch((error) => res.status(404).send(error));
};
