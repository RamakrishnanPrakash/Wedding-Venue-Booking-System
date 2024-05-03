const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const env = require("dotenv");
const db = require("../db");

const connection = db.connection();
exports.userDetails = async (req, res) => {
  try {
    if (!req.cookies.account) {
      res.status(404).render("login");
    }

    // console.log("Cookies:" + req.cookies.account);
    if (req.cookies.account) {
      const decryptCode = await promisify(jwt.verify)(
        req.cookies.account,
        process.env.JWT_SECRET
      );
      //   console.log(decryptCode.id);
      const queryAsync = promisify(connection.query).bind(connection);
      let userData = [];
      userData = await queryAsync("SELECT * FROM USER WHERE user_id=?", [
        decryptCode.id,
      ]);

      console.log(userData[0].user_id, userData[0].uname);
      let allRecords = await queryAsync(
        ` SELECT MAHAL.mahalname,MAHAL.distic,MAHAL.city,MAHAL.mahalimage,MAHAL.indoor,MAHAL.amount,
      BOOKING.date,BOOKING.BOOKING_DATE,BOOKING.EMAIL,BOOKING.PHONE_NO,BOOKING.USERNAME FROM MAHAL,BOOKING
      WHERE MAHAL.id=BOOKING.MAHAL_ID AND BOOKING.USER_ID=?`,
        [userData[0].user_id]
      );
      res.status(202).json(allRecords);
    }
  } catch (err) {
    console.log(err);
    res.render("404");
  }
};

exports.user_information = async (req, res) => {
  if (req.cookies.account) {
    const decryptCode = await promisify(jwt.verify)(
      req.cookies.account,
      process.env.JWT_SECRET
    );
    //   console.log(decryptCode.id);
    const queryAsync = promisify(connection.query).bind(connection);
    let userData = [];
    userData = await queryAsync(
      "SELECT uname,uemail FROM USER WHERE user_id=?",
      [decryptCode.id]
    );

    res.status(200).json(userData);
  }
};

exports.Delete_information = async (req, res) => {
  try {
    const { mahalname, distic, bookingDate } = req.body;
    console.log(mahalname, distic, bookingDate);
    const decrpt = await decode(req.cookies.account);
    const mahalId = await fetchMahalId(mahalname, distic);

    console.log(mahalId, decrpt, bookingDate);
    console.log(typeof bookingDate);

    connection.query(
      "DELETE FROM booking WHERE MAHAL_ID=? AND USER_ID= ? AND date=?",
      [mahalId, decrpt, bookingDate],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(404);
        }
        if (!err) {
          console.log("Deleted");
          console.log(result);
          res.status(200).json("Data Deleted");
        }
      }
    );
  } catch (error) {}
};
function fetchMahalId(mahalname, distic) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT id FROM mahal WHERE mahalname=? AND distic=?",
      [mahalname, distic],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        if (result.length > 0) {
          // console.log(result[0].id);
          resolve(result[0].id);
        }
      }
    );
  });
}
async function decode(req) {
  if (req) {
    const decryptCode = await promisify(jwt.verify)(
      req,
      process.env.JWT_SECRET
    );
    //   console.log(decryptCode.id);

    // console.log(decryptCode.id);
    return decryptCode.id;
  }
}

exports.getAllDeatails = (req, res) => {
  connection.query("SELECT * FROM MAHAL", (err, result) => {
    if (err) res.send().status(404);

    if (result.length > 0) {
      res.json({ mahal: result });
    }
  });
};
