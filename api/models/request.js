import mongoose from 'mongoose'
const { Schema } = mongoose;


const RequestSchema = new Schema({
    fromUser:String, //USer object id
    toUser:String, //User Object id
    requestType:String, //String //-friend / message
})



export default RequestSchema
