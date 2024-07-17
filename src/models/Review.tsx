
import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    message:{
        type:String,
        required:[true,"Name is Required"]
    },
    avatar:{
        public_id:String,
        url:String
    }
});

const Review = mongoose.models.Review || mongoose.model("Review",reviewSchema)

export default Review;