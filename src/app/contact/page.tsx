import Button from "@/components/UI/Button";
import { HiLocationMarker } from "react-icons/hi";
import { ImMobile } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// pages/about.js
export default function Contact() {
  return (
    <>
      <div className="bg-purple-800 h-[85px]"></div>
      <section className="w-full py-10 mb-[-130px] ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col gap-14 ">
          <div className="mb-10">
          <div className="relative inline">
            <h1 className="text-center text-3xl sm:text-4xl text-purple-800 font-bold hedingUnderLine inline ">
              CONTACT US
            </h1>
          </div>
          </div>
        
          <div className="flex w-full px-5 justify-between gap-2 flex-col md:flex-row ">
            <div className="w-full bg-white flex flex-col gap-4 border-2 border-black p-8 mx-auto">
              <h1 className="text-purple-800 text-2xl sm:text-3xl font-bold">Send Message</h1>

              <form action="" method="post" className="flex gap-3 flex-col">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full flex gap-1 flex-col">
                    <span>First Name:</span>
                    <input
                      type="text"
                      name="First-Name"
                      placeholder="Sushil"
                      className=" p-4 bg-transparent text-xl text-purple-800 font-bold border-2 border-black outline-purple-400"
                    />
                  </div>

                  <div className="w-full flex gap-1 flex-col">
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="Last-Name"
                      placeholder="Kumar"
                      className=" p-4 bg-transparent text-xl text-purple-800 font-bold border-2 border-black outline-purple-400"
                    />
                  </div>
                </div>
                <div className="w-full grid  grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full flex gap-1 flex-col">
                    <span>Email</span>
                    <input
                      type="email"
                      name="Email"
                      placeholder="example@gmail.com"
                      className=" p-4 bg-transparent text-xl text-purple-800 font-bold  border-2 border-black outline-purple-400"
                    />
                  </div>
                  <div className="w-full flex gap-1 flex-col">
                    <span>Mobile</span>
                    <input
                      type="text"
                      name="Mobile"
                      placeholder="+91 8425643248"
                      className=" p-4 bg-transparent text-xl text-purple-800 font-bold  border-2 border-black outline-purple-400"
                    />
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-4">
                  <div className="  w-ful flex flex-col gap-1">
                    <span>Message</span>
                    <textarea
                      name="Message"
                      placeholder="Write your Message here"
                      className=" w-full p-4 bg-transparent text-xl text-purple-800 font-bold h-[30vh]  border-2 border-black outline-purple-400"
                    />
                  </div>
                </div>
                <div>
                  <Button> SEND</Button>
                </div>
              </form>
            </div>
            <div className="w-full border-2 border-black p-4 flex flex-col gap-4 mx-auto">
              <h1 className="text-purple-800 my-8 font-bold text-2xl sm:text-3xl">
                Get in Touch
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4 text-xl">
                  <span className="text-2xl hover:text-purple-800">
                    <HiLocationMarker />
                  </span>{" "}
                  <p>Kacholora Azamabad Araon Firozabad</p>{" "}
                </div>
                <div className="flex gap-4 text-xl">
                  <span className="text-2xl hover:text-purple-800">
                    <MdEmail />
                  </span>{" "}
                  <p>example@email.com</p>{" "}
                </div>
                <div className="flex gap-4 text-xl">
                  <span className="text-2xl hover:text-purple-800">
                    <ImMobile />
                  </span>
                  <p>+91 9465743525</p>
                </div>
                <div className="flex gap-4 text-xl">
                  <span className="text-2xl hover:text-purple-800">
                    <IoLogoWhatsapp />
                  </span>{" "}
                  <p>+91 9465743525</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="w-full py-8 px-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d957.8011763826778!2d78.70886167575624!3d27.16196117906633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1687065681822!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
