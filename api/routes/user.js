import { Router } from 'express';
const router = Router();
import { db } from '../models';
import jwt from 'jsonwebtoken';
const authConfig = {
  secret:'lkkjfkdfjdkj12122'
}
//Middlewares
const tokenIdentify = ({token})=>{
  try{
    let vToken = jwt.verify(token, authConfig.secret);
    return{
      ok:true,
      id:vToken.id,
      token:token,
    }
  }catch(err){
    return {
      ok:false
    }
  }
}

const validToken = (req, res, next)=>{
  let token = req.headers.authorization;
  try{
    let vToken = jwt.verify(token, authConfig.secret);
    res.locals.token = vToken;
    next()
  }catch(err){
    res.send({
      ok:false,
      message:'Token has expired'
    })
  }
}


router.get('/identify', async(req,res)=>{
  let token = req.headers.authorization.replace('Bearer ', '');
  let user_ = tokenIdentify({token})
  if(!user_.ok){res.status(403).send({message:'Invalid authentication token', ok:false})}
  db.user.findOne({
    _id:user_.id,
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


router.post('/friends/add',validToken, async (req,res)=>{
    db.user.findOneAndUpdate({email:req.body.email}, {
      friends:req.body.friends
    }).exec((err,user)=>{
        if(err){
          res.send({
            ok:false,
            message:"Something went wrong"
          })
          return
        }
        const {fname, lname, email, friends } = user;
        res.json({
          user:{
            email,
            friends,
          }
      })
    })
})


module.exports = router
