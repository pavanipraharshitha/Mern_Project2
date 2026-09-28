




let express=require("express");
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users')

router.post("/register",(req,res)=>{
    
    res.send("register route");

});
router.post("/login",(req,res)=>{
    res.send("login Route");

});


router.put("/updateProfile",(req,res)=>{
    res.send("update profile  route");

});

module.exports=router;