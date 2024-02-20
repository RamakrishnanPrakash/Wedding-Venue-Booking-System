const express=require('express');
const router=express.Router();
const userController=require('../Controller/user')

router.get('/distic',userController.distic);
router.get('/filter',userController.filter);
router.get('/info',userController.info);
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.post('/booking',userController.bookingMahal); 
router.get('/back',userController.back);
router.get('/otp',userController.resendOtp);
router.post('/validOtp',userController.validOtp);
module.exports=router;