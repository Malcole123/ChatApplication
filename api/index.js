import express from 'express';
import userRoute from './user.js';
import { db } from './models';



const app = express();
app.use('/user', userRoute);




db.mongoose.connect(process.env.NUXT_APP_MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log('MongoDB Connected')
}).catch(err=>{
  console.log('Connection error', err)
})


export default app
