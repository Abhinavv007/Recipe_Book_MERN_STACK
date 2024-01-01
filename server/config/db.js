import mongoose from "mongoose";
const dbConnect = async()=>{
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Recipes")
    if(connect){
          console.log("Database connected successfully")
    } else{
        console.log("Database failed to connect")
    }
}
export default dbConnect