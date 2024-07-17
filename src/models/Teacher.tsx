
import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    subject:{
        type:String,
        required:[true,"Name is Required"]
    },
    avatar:{
        public_id:String,
        url:String
    }
});

const Teacher = mongoose.models.Teacher || mongoose.model("Teacher",teacherSchema)

export default Teacher