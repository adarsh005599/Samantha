import mongoose from "mongoose";

//fn to connet with db

export const connetdb =  async() =>{
    try { 
        mongoose.connection.on("connected", ()=> console.log("database connected "))
        await mongoose.connect(`${process.env.MONGODB_URI}/she's Mine`)
        
    } catch (error) {
        console.log("connection failed", error);
    }
}