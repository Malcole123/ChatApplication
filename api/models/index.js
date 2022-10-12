import mongoose from 'mongoose'
import User from './user'
mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose;
db.user = User;



export { db}

