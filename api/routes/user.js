import { Router } from 'express';
const router = Router();
import { db } from '../models';
import jwt from 'jsonwebtoken';
const authConfig = {
  secret:'lkkjfkdfjdkj12122'
}
//Middlewares
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


router.post('/friend/request', tokenMiddleware, async (req,res)=>{
  //Check for active request
  const activeRequest = db.request.find({
    fromUser:req.userData.uid,
    toUser:req.body.toUser
  }).exec((err, actReq)=>{
        if(err ||actReq.length > 0){
          res.status(400).send({
            ok:false,
            message:'You already sent this user a friend request.'
          });
          return
        }
        //Create new request since emtpy
        const request = new db.request({
          fromUser:req.userData.uid, //USer object id
          toUser:req.body.toUser,
          requestType:req.body.requestType,
        })
        request.save((err,request)=>{
          if(err){
            res.status(400).send({
              ok:false,
              err,
            })
            return
          }
          res.status(200).send({
            ok:true,
            redirect:'/'
          })

        });
    })
})


module.exports = router
