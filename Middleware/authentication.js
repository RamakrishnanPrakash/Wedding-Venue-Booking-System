const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const env = require("dotenv");
const db = require("../db");
const { json } = require("express");

const connection = db.connection();
exports.userDetails = async (req, res, next) => {
  try {
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
      const data = JSON.stringify(userData);
      req.userData = data;
      next();
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
