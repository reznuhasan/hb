import mongoose from "mongoose"
import { databaseName } from "../constants.js"
const connectDB=async()=>{
    try {
        const connectionIntance=await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`) 
        console.log(`\n Mongodb Connected: DB Host - ${connectionIntance.connection.host}`)
    } catch (error) {
        console.log('MongoDB Connection Failed',error)
        process.exit(1)
    }
}

export default connectDB;