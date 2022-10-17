import express from 'express';
import userRoute from './routes/user';
import authRoute from './routes/auth';
import searchRoute from './routes/search';

import { db } from './models';

//middlewares
const app = express();
app.use(express.json());
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/search', searchRoute);




db.mongoose.connect(process.env.NUXT_APP_MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log('MongoDB Connected')
}).catch(err=>{
  console.log('Connection error', err)
})


app.listen(process.env.PORT, ()=>{
  console.log('connected')
})

export default app
