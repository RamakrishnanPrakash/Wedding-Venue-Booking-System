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
      BOOKING.BOOKING_DATE,BOOKING.EMAIL,BOOKING.PHONE_NO,BOOKING.USERNAME FROM MAHAL,BOOKING
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
