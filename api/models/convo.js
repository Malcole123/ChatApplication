import mongoose from 'mongoose'
const { Schema } = mongoose;


const ConvoSchema = new Schema({
    cuid:String,
    convoType:String,
    convoSubject:String,
    participants:Array,
})



export default ConvoSchema
