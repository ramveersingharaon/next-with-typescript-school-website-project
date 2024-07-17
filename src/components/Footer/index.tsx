import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-footer bg-cover w-full flex items-center justify-center bg-white flex-col">
      <div className="max-w-[1240px] mx-auto mt-[100px] px-5">
        <div className="w-full flex flex-col text-white text-xl py-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            <div className="flex items-center flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold mb-5">Address</h1>
              <p>
                Kacholara Azamabad Araon Sirsagang Firozabad (Uttar Pradesh) -
                205121 INDIA
              </p>
            </div>
            <div className=" flex items-center justify-center w-full ">
              <div className="gap-3 flex-col flex">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5">Contact</h1>
                <p className="flex gap-2">
                  <BsFillTelephoneFill /> <span>+91 0000000000</span>
                </p>
                <p className="flex gap-2">
                  <GrMail />
                  <span>example@mail.com</span>
                </p>
                <p className="flex gap-2">
                  <BsWhatsapp />
                  <span>+91 0000000000</span>
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-col items-center md:translate-x-[50%] lg:translate-x-0">
              <h1 className="text-2xl sm:text-3xl font-bold mb-5">Links</h1>
              <Link className="Link" href="/about">
                <li className="list-none">About Us</li>
              </Link>
              <Link className="Link" href="/contact">
                <li className="list-none">Contact Us</li>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter bg-[#4d1d96] w-full text-white py-2 ">
        <p className="text-center">
          {" "}
          Copyright © SS Patharia Public School 2024 All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
