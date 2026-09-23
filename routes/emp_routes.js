let express=require("express");
let router=express.Router();
let bycrypt=require("bcrypt");
let {users}=require("../models/users");

router.post("/register", async (req, res) => {
 // res.send("Register page called");
  let data=req.body;
  let newUser=new users(data);
  let result=awaitnewUser.save();
  res.send(result);
});

router.post("/login", async (req, res) => {
  let user=await users.findOne({email:req.body.email});
  if(user){
    let passwordMatch=await bycrypt.compare(req.body.password,user.password);

    if(passwordMatch){
      res.send("Login successful");
    }else{
      res.send("Password invalid");
    }
  }else{
    res.send("Email invalid");
  }
});

router.get("/viewtasks", (req, res) => {
  res.send("View Tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("View ToDo page called");  
});

router.put("/updateprofile", (req, res) => {
    res.send("Update Profile page called");
});

module.exports = router;