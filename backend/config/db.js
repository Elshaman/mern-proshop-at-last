import mongoose from "mongoose"
import colors from 'colors'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgYellow.magenta)
    } catch (error) {
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

//connectDB()
export default connectDB;