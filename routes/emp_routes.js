let express=require("express");
let router=express.Router();
let  {users}=require("../models/users");

router.post("/register", async (req, res) => {
 res.send("Register page called")  ;
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

router.patch("/updateprofile/:id",async (req, res) => {
  let data=req.body;
  if(data.password){
    data.password=await bycrypt.hash(data.password,10);
  }
let updatedata=await user.findByIdAndUpdate(req.params.id,{$set:data});
res.send(updatedata);
});

module.exports = router;