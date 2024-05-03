const express = require("express");
const mysql = require("mysql");

const router = express.Router();
const userDetails = require("../Controller/UserDetails");
const bookingDetails = require("../Controller/bookingDatails");

router.get("/user", userDetails.userDetails);
router.get("/user_informatiom", userDetails.user_information);
router.delete("/cardData", userDetails.Delete_information);
router.get("/allData", userDetails.getAllDeatails);
router.post("/BookingDate", bookingDetails.Booking);
module.exports = router;
