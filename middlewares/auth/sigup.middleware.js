import { db } from "~/api/models";
import User from "~/api/models/user";

const checkDuplicateSignUp = (req, res, next)=>{
//Checks database for username and email
const success = {
  username:true,
  email:true
}
User.findOne({username:req.body.username}).exec((err,user)=>{
      if(err){
        res.status(500).send({message:"Something went wrong" + err});
        return
      }
      if(user){
          success.username = false
      }
})

User.findOne({email:req.body.email}).exec((err,user)=>{
  if(err){
    res.status(500).send({message:"Something went wrong" + err});
    return
  }
  if(user){
      success.email = true
  }
})

if(success.username && success.email){
  next()
}else{
  res.status(400).send(success)
}
}


module.exports =  {
  checkDuplicateSignUp,
}
