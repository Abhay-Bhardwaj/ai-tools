'use server'
import mongoose from "mongoose";

type ConnectionObject={
  isConnected?: number;
}

const connection: ConnectionObject={
};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Using existing database connection');
    return;
  }
  try{
    const db=await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!,{
      dbName:'ai-tools'
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected');

  }
  catch(error){
    console.log('Error connecting to database:', error);
    process.exit(1);
  }
}

export default dbConnect;