import { Router } from 'express';
const router = Router();
import { db } from '../models';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
const authConfig = {
  secret:process.env.NUXT_APP_LOCAL_USER_DATA
}
//Middlewares
const tokenVerify = ({token})=>{
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

const searchInterpret = (bdy)=>{
  /*searchType:this.search.searchType,
  search:{
    first:"",
    last:"",
    full:"",
    email:"",
  } */
  //Returns search body
  if(bdy.searchType !== 'email' && bdy.searchType !== 'name'){return false }
  if(bdy.searchType === 'email'){
    let ret = {};
    ret.email = bdy.search.email;
    return ret
  }else{
    let ret ={$or:[{fullname:`${bdy.search.full}`}, {fname:`${bdy.search.first}`}, {lname:`${bdy.search.last}`}]}
    return ret
  }
}


router.post('/users', (req,res)=>{
  let search_ = searchInterpret(req.body.search);
  if(search_ === false){
    res.send({
      ok:false,
      message:"Invalid search"
    })
    return
  }
  try{
    let s = db.user.find(search_);
    s.exec((err,user)=>{
      if(err){
        res.send({
          ok:false
        })
        return
      }
      res.send({
        ok:true,
        data:user
      })

    })
  }catch(err){
    return {
      ok:false
    }
  }
})

module.exports = router
