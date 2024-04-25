const express = require("express");
const mysql = require("mysql");

const router = express.Router();
const userDetails = require("../Controller/UserDetails");

router.get("/user", userDetails.userDetails);
router.get("/user_informatiom", userDetails.user_information);

module.exports = router;
