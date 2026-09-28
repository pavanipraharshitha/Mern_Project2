


let express=require("express");
let router=express.Router();
let {users}=require('../models/users');


router.put("/viewusers",(req,res)=>{
    res.send("view users route");

});
router.delete("/deleteuser",(req,res)=>{
    res.send("delete users")
    
});

module.exports=router;