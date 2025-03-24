
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI=process.env.MONGO_URI;

export const connectDatabase=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("connected database");
    }catch(error){
    
        console.log("error while connecting" ,error);

    }
}
