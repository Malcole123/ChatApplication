import { Router } from 'express';
const router = Router();
import { db } from '../models';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
const authConfig = {
  secret:process.env.NUXT_APP_LOCAL_USER_DATA
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

const tokenMiddleware = (req, res, next)=>{
  let token = req.headers.authorization.replace('Bearer ', '');
  try{
    let vToken = jwt.verify(token, authConfig.secret);
    req.userData = {
      token,
      uid:vToken.id,
      name:vToken.name,
      email:vToken.email,
      tokenOk:true,
    };
    next()
  }catch(err){
    res.status(403).send({message:'Not authorized', ok:false})
  }
}


router.get('/me', tokenMiddleware, async(req,res)=>{
  let uid = req.userData.uid;
  let token = req.userData.token;
  let tokenOk = req.userData.tokenOk;
  //Dep-- Unnecessary
  db.user.findOne({
    _id:uid,
  }).exec((err,user)=>{
    if(!user || err){
      res.send({message:"User not found", ok:false});
      return
    }
    const { email, fname, lname , friends} = user;
    res.json({
        authToken:token,
        user:{
          name:{
            first:fname,
            last:lname,
          },
          email,
          friends,
        }
    })
  })
})



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
    res.json({
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
    var token = jwt.sign({id:user._id, name:user.fullname, email:user.email}, authConfig.secret, {
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
