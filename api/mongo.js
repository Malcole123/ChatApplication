import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.NUXT_APP_MONGODB_URI || "mongodb://localhost", {useunifiedTopology:true});

export default client;
