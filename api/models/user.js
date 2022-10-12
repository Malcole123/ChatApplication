import { Schema } from 'mongoose'


const User = new Schema({
    name:{
      first:String,
      last:String,
    },
    email:String,
    username:String,
    password:String,
})


export default User
