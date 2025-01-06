import mongoose from "mongoose";
const connectDB=async()=>{
    mongoose.connnection.on('connected',()=>{
        console.log("connection establishment");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}
export default connectDB;