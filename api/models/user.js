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


export default UserSchema
