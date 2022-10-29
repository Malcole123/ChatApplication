import mongoose from 'mongoose'
import User from './user';
import Convo from './convo';
import Message from './message';
import Request from './request';

mongoose.Promise = global.Promise;


const db = {}

db.mongoose = mongoose;
db.user = mongoose.model('User', User);
db.convos = mongoose.model('Conversations', Convo );
db.messages = mongoose.model('Messages', Message);
db.request = mongoose.model("Request", Request);



export { db }

