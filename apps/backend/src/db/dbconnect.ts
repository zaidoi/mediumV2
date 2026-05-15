import mongoose from "mongoose";

export const connectDB = async () =>{
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Mongo uri${process.env.MONGO_URL}`)
} catch (error) {
    console.log(`DB Error`,error)
}
}