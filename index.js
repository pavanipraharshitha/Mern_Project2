

let express=require("express");
let app=express();
let userroutes=require('./routes/user_route');
let adminroutes = require('./routes/admin_route');
let mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/secure_file_storage")
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err )=>{
    console.log(err);
})


app.use(express.json());
app.use("/api/user",userroutes);
app.use("/api/admin",adminroutes);


//run the Server
app.listen(3000,()=>{
    console.log("server listenig on port 3000")
})