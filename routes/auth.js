const express = require("express");
const router = express.Router();
const userController = require("../Controller/user");
const middleWare = require("../Middleware/authentication");

router.get("/distic", middleWare.userDetails, userController.distic);
router.get("/filter", middleWare.userDetails, userController.filter);
router.get(
  "/info",
  userController.isLoggedIn, //this middleware check user have been login and valid user
  middleWare.userDetails, //this middleware was maitain logo
  userController.info
);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/booking", userController.bookingMahal);
router.get("/back", userController.back);
router.get("/otp", userController.resendOtp);
router.post("/validOtp", userController.validOtp);
module.exports = router;
