const { Router } = require('express')
const router = Router();


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

const signup = (req,res)=>{
    const user = new User({
      name:{
        first:req.body.fname,
        last:req.body.lname
      },
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

router.post("/signup",checkDuplicateSignUp, (req,res)=>{
  console.log("reached")
  //signup(req,res);
  res.send({ok:true})
})

module.exports = router
