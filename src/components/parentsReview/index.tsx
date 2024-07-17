"use client";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import LeaveReview from "./leaveReview";
import { deleteReviewAction } from "@/actions";
import { useRouter } from "next/navigation";


interface Review {
  _id: string;
  name: string;
  message: string;
  avatar: {
    public_id: string;
    url: string;
  };
}

interface ParentsReviewProps{
  reviews:Review[],
  auth:boolean
}

const  ParentsReview:React.FC<ParentsReviewProps> = ({reviews,auth})=>{

  const router = useRouter()

  const deleteReviewActionHandle = async (id:string)=>{
    try {
      const result =await deleteReviewAction(id)
      console.log(result)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" leaveReviewContainerShadow rounded-lg w-[85%] sm:w-[60%] md:w-[50%]"
      >
        {reviews?.map((review) => (
            <SwiperSlide
              key={review._id}
              className="boder-2 border-black w-full p-9 "
            >
              <div key={review._id} className="flex gap-5 flex-col items-center justify-center">
                

                <Image
                  src={review?.avatar?.url}
                  width={300}
                  height={300}
                  alt="reviewImages"
                    className="h-[200px] w-[200px] sm:h-[225px] sm:w-[225px]  border hover:border-2 hover:scale-110 duration-300  border-white bg-white roundedShodow "
                 
                />
               
                <h1 className="text-xl font-bold"> {review.name}</h1>
                <p ><BiSolidQuoteAltLeft className="inline mt-[-15px] mr-2" />{review.message} <BiSolidQuoteAltRight className="inline mt-[15px] ml-2"/></p>
                {auth ? <button onClick={()=>deleteReviewActionHandle(review._id)} className="text-red-800">Delete</button> : null}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}

export default ParentsReview;