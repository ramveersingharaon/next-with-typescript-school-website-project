
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Name is Required"]
    },
    password:{
        type:String,
        required:[true,"Name is Required"]
    }
});

const User = mongoose.models.User || mongoose.model("User",userSchema)

export default User