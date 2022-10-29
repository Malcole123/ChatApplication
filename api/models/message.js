import mongoose from 'mongoose'
const { Schema } = mongoose;


const MessageSchema = new Schema({
    convoID:String,
    message:String,
    senderID:String,
    senderEmail:String,
})



export default MessageSchema
