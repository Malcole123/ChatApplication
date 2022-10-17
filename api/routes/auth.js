import { Router } from 'express';
const router = Router();
import { db } from '../models';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
const authConfig = {
  secret:'lkkjfkdfjdkj12122'
}
//Middlewares
const checkDuplicateSignUp = async (req, res, next)=>{
  //Checks database for username and email
    db.user.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
          res.send({message:"Something went wrong" + err, ok:false});
          return
        }
        if(user){
          res.send({
            ok:false,
            emailTaken:true,
            message:"Email already taken",
          })
        }else{
          next()
        }
    })
}




router.post("/signup",checkDuplicateSignUp, async (req,res)=>{
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const user = new db.user({
    fname:req.body.fname,
    lname:req.body.lname,
    fullname:`${req.body.fname} ${req.body.lname}`,
    email:req.body.email,
    password:hashedPassword,
  })
  user.save((err,user)=>{
    const { fname, lname, email } = user;
    if(err){
      res.send({message:"Something went wrong", err, ok:false});
      return
    }
    res.send({
      ok:true,
      message:"User registered successfully",
      authToken:"",
      user:{
        name:{
          first:fname,
          last:lname,
        },
        email,
      }
    })
  })
})

router.post('/login', async(req,res)=>{
  db.user.findOne({
    email:req.body.email,
  }).exec((err,user)=>{
    if(!user){
      res.send({message:"User not found", ok:false});
      return
    }
    let passCheck = bcrypt.compareSync(
      req.body.password,
      user.password
    )
    if(!passCheck){
        res.send({message:"invalid password",ok:false,authError:true});
        return
    }
    var token = jwt.sign({id:user._id}, authConfig.secret, {
      expiresIn:86400 // 24 Hrs
    })
    const { email, fname, lname, } = user;
    res.send({
        authToken:token,
        user:{
          name:{
            first:fname,
            last:lname,
          },
          email,
        }
    })
  })
})

router.post('/logout', async(req,res)=>{
  // Log out here
})


module.exports = router
