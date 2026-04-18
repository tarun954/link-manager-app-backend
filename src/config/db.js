// import mongoose from 'mongoose';

// const url = "mongodb+srv://tarunnadu47_db_user:<db_password>@cluster0.npbeaj7.mongodb.net/?appName=Cluster0";
// const client = new MongoClient(url);

// const dbName = "Project0";

// async function main(){
//     try{
//         await client.connect();
//         console.log("Connected Successfully to MongoDB Atlas");
//     }catch(error){
//         console.error(error);
//     }
// }

// export default main();

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ DB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;