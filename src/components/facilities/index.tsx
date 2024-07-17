"use client";
import React, { useEffect, useState } from "react";

const Facilities = () => {
  const [isHoverBus, setIsHoverBus] = useState(false);
  const [isHoverLibrary, setIsHoverLibrary] = useState(false);
  const [isHoverSport, setIsHoverSport] = useState(false);

  return (
    <div className="flex flex-wrap min-h-[80vh] w-[90vw] xl:w-[80vw] py-10  ">
      <div>
        <div className=" relative w-full text-white flex items-center justify-center">
          <div
            className={`w-full h-full  bg-purple-800 bus absolute top-0 left-0 p-5 flex gap-4 flex-col ${
              isHoverBus ? "z-10" : "z-0"
            }`}
          >
            <h1 className="text-4xl font-bold">Transport</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              repellendus odit sit reiciendis optio. Magni eligendi optio
              aspernatur rerum eveniet a. Deserunt voluptatum facilis error sed
              velit? Officiis, tempora fugit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia repellendus odit sit
              reiciendis optio. Magni eligendi optio aspernatur rerum eveniet a.
              Deserunt voluptatum facilis error sed velit? Officiis, tempora
              fugit.
            </p>
          </div>
          <div
            className={`w-full h-full  bg-purple-800 bus absolute top-0 left-0  p-5 flex gap-4 flex-col ${
              isHoverLibrary ? "z-10" : "z-0"
            }`}
          >
            <h1 className="text-4xl font-bold">Library</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              dicta quasi quos rerum eligendi asperiores harum sit voluptas
              inventore assumenda, pariatur id sequi reiciendis voluptate
              molestias consectetur, perspiciatis quo cupiditate! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam dicta quasi
              quos rerum eligendi asperiores harum sit voluptas inventore
              assumenda, pariatur id sequi reiciendis voluptate molestias
              consectetur, perspiciatis quo cupiditate!
            </p>
          </div>
          <div
            className={`w-full h-full  bg-purple-800 bus absolute top-0 left-0  p-5 flex gap-4 flex-col ${
              isHoverSport ? "z-10" : "z-0"
            }`}
          >
            <h1 className="text-4xl font-bold">Sport</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae mollitia aliquid dignissimos tempora similique numquam
              accusamus et placeat, corporis vero quaerat commodi id quae ipsa
              nihil, fugiat saepe. Voluptatem, quisquam! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Repudiandae mollitia aliquid
              dignissimos tempora similique numquam accusamus et placeat,
              corporis vero quaerat commodi id quae ipsa nihil, fugiat saepe.
              Voluptatem, quisquam!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        
          <div className="relative border-4 border-black">
            <img
              onMouseEnter={() => setIsHoverBus(true)}
              onMouseLeave={() => setIsHoverBus(false)}
              className={` border-2 border-white rounded-xl  absolute top-[30%] translate-y-[-30%] left-[30%] translate-x-[-30%] ${
                isHoverBus
                  ? "z-10 border-4 border-white scale-125 duration-100"
                  : "z-0"
              }`}
              src="/facilities/bus.webp"
              alt=""
            />

            <img
              onMouseEnter={() => setIsHoverLibrary(true)}
              onMouseLeave={() => setIsHoverLibrary(false)}
              className={` border-2 border-white rounded-xl  absolute top-[45%] translate-y-[-45%] left-[45%] translate-x-[-45%]  ${
                isHoverLibrary
                  ? "z-10 border-4 border-white scale-125 duration-100"
                  : "z-0"
              }`}
              src="/facilities/library.webp"
              alt=""
            />

            <img
              onMouseEnter={() => setIsHoverSport(true)}
              onMouseLeave={() => setIsHoverSport(false)}
              className={` border-2 border-white rounded-xl   absolute top-[60%] translate-y-[-60%] left-[60%] translate-x-[-60%] bus ${
                isHoverSport
                  ? "z-10 border-4 border-white scale-125 duration-100"
                  : "z-0"
              }`}
              src="/facilities/sports.webp"
              alt=""
            />
          </div>
        </div>
     
    </div>
  );
};

export default Facilities;
