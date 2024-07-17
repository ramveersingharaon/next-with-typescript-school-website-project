"use server";
import cloudinary from "@/cloudinary";
import DbConnection from "@/db";
import Review from "@/models/Review";
import Teacher from "@/models/Teacher";
import User from "@/models/User";
import { strict } from "assert";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const LoginAction = async (formData: {
  email: string;
  password: string;
}) => {
  try {
    await DbConnection();

    const { email, password } = formData;

    if (!email || !password) {
      return {
        success: false,
        message: "please fill all fields",
      };
    }

    const checkUser = await User.findOne({ email, password });

    if (checkUser) {
      const token = jwt.sign(
        { token: checkUser._id },
        process.env.SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );
      const getCookies = cookies();
      getCookies.set("token", token);

      return {
        success: true,
        message: "User Login Successfully",
        token, // Added token to the return object
      };
    } else {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "something went wrong", // Changed to error.message
    };
  }
};

export const LogoutAction = async () => {
  try {
    await DbConnection();
    const getCookies = cookies();
    getCookies.set("token", "");
    return {
      success: true,
      message: "User Logout Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};

export const addTecherAction = async (formData: {
  name: string;
  subject: string;
  avatar: string | undefined;
}) => {
  try {
    await DbConnection();
    const { name, subject, avatar } = formData;
    if (!name || !subject || !avatar) {
      return {
        success: false,
        message: "Please fill all fields",
      };
    }
    const myCloud = await cloudinary.uploader.upload(avatar, {
      folder: "school2024",
    });
    const addTeacher = await new Teacher({
      name,
      subject,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    console.log(addTeacher);

    if (addTeacher) {
      await addTeacher.save();
      return {
        success: true,
        message: "Techer Add Successfully",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};
export const addReviewAction = async (formData: {
  name: string;
  message: string;
  avatar: string | undefined;
}) => {
  try {
    await DbConnection();
    const { name, message, avatar } = formData;
    if (!name || !message || !avatar) {
      return {
        success: false,
        message: "Please fill all fields",
      };
    }
   
    const myCloud = await cloudinary.uploader.upload(avatar, {
      folder: "school2024",
    });
    const addReview = await new Review({
      name,
      message,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    // console.log(addReview);

    if (addReview) {
      await addReview.save();
      return {
        success: true,
        message: "Review Add Successfully",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};


export const getTeacherAction =async ()=>{
  try {
   await DbConnection()
   const teachers =await Teacher.find();
  //  console.log(teachers)
  if(teachers){
    return{
      success:true,
      message:"There all Teachers",
      // data:teachers
      data:JSON.parse(JSON.stringify(teachers))
     }
  }
  
  } catch (error) {
    return{
      success:false,
      message:"some error accurd! please try again"
     }
  }
}

export const getReviewAction =async ()=>{
  try {
  await  DbConnection()
  const reviews = await Review.find();
  // console.log(reviews)
  if(reviews){
    return{
      success:true,
      message:"There all Reviews",
      // data:reviews
      data:JSON.parse(JSON.stringify(reviews))
     }
  }
  } catch (error) {
    return{
      success:false,
      message:"some error accurd! please try again"
     }
  }
}
export const deleteReviewAction =async (id:string)=>{
  try {
  await  DbConnection()
  const reviews = await Review.findByIdAndDelete(id);
  // console.log(reviews)
  if(reviews){
    return{
      success:true,
      message:"Review Delete Successfully",
     }
  }
  } catch (error) {
    return{
      success:false,
      message:"some error accurd! please try again"
     }
  }
}
export const deleteTeacherAction =async (id:string)=>{
  try {
  await  DbConnection()
  console.log(id)
  const reviews = await Teacher.findByIdAndDelete(id)
  console.log(reviews)
  if(reviews){
    return{
      success:true,
      message:"Review Delete Successfully",
     }
  }
  } catch (error) {
    return{
      success:false,
      message:"some error accurd! please try again"
     }
  }
}
