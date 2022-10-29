import authConfig from "~/auth.config";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import User from "~/api/models/user";

const signup = (req,res)=>{
  const user = new User({
    username:req.body.username,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password, 8),
  })
  user.save((err,user)=>{
    if(err){
      res.status(500).send({message:"Something went wrong", err});
      return
    }
    res.status(200).send({
      message:"User registered successfully",
      user,
    })
  })
}

const signin = (req, res)=>{
  User.findOne({
    email:req.body.email,
  }).exec((err,user)=>{
    if(!user){
      return res.status(404).send({message:"User not found"})
    }
    let passCheck = bcrypt.compareSync(
      req.body.password,
      user.password
    )
    if(!passCheck){
        res.status(401).send({message:"invalid password"})
    }
    var token = jwt.sign({id:user.id}, authConfig.secret, {
      expiresIn:86400 // 24 Hrs
    })
    res.status(200).send({
      id:user._id,
      username:user.username,
      email:user.email,
      accessToken:token,

    })
  })
}

module.exports = {
  signup,
  signin
}
