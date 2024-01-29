const express=require('express');
const userController=require("../Controller/user");

const router=express.Router();

router.get(['/','/home'],(req,res)=>{
        res.render('index'); 
});
router.get('/check',(req,res)=>{
    res.render('check');
});
router.get('/venue',userController.isLoggedIn,(req,res)=>{
    if(req.user){
        res.render('venue_search');
    }
    else{
        res.render('login');
    }
    
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})
module.exports=router;