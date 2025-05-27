import mongoose from "mongoose";    

//contect to the mogodb database 

const connectDB = async () => {
    mongoose.connection.on('connected',()=>console.log('Database Conected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default  connectDB;