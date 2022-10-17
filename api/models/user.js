import mongoose from 'mongoose';
import { db } from '.';
const { Schema } = mongoose;


const UserSchema = new Schema({
    fname:String,
    lname:String,
    fullname:String,
    email:String,
    password:String,
    friends:Array
})

UserSchema.methods.getFriendSummary = ()=>{
  let use = db.user.find();
  use.$where(()=>{
    this.friends.includes(this._id)
  });
  console.log(use)
  return use
}


export default UserSchema
