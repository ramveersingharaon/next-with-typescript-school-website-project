"use client";
import React, { useState } from "react";
import Button from "../UI/Button";
import "./style.css";
import { useRouter } from "next/navigation";
import { addReviewAction } from "@/actions";

const LeaveReview = () => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const initialState = {
    name: "",
    message: "",
    avatar: "",
  };

  const [formData, setFormData] = useState(initialState);

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const Reader = new FileReader();
      Reader.readAsDataURL(e.target.files[0]);
      Reader.onload = () => {
        if (Reader.readyState == 2) {
          setFormData({ ...formData, [e.target.name]: Reader.result });
        }
      };
    }
  };

  const addReviewActionHandler = async () => {
    try {
      const result = await addReviewAction(formData);
      console.log(result);

      console.log(formData);
      setToggle(!toggle);
      setFormData(initialState);
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col  p-10  shadow-2xl leaveReviewContainerShadow ">
      <div className="flex items-center flex-col">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          velit facilis autem perferendis impedit provident totam eos aperiam,
          eaque amet placeat cumque illum ducimus laboriosam esse eligendi sit
          ex? Alias!
        </p>
        <div className="mt-5" onClick={() => setToggle(!toggle)}>
          <Button>Leave Review</Button>
        </div>
      </div>
      <div
        className={
          toggle
            ? "fixed top-[50vh] translate-y-[-50%] left-[50vw] translate-x-[-50%] bg-white z-50 rounded-3xl leaveReviewContainerShadow"
            : "hidden"
        }
      >
        <form
          action={addReviewActionHandler}
          className="flex items-center flex-col gap-5 p-20 "
        >
          <div className="w-full ">
            <p
              onClick={() => setToggle(!toggle)}
              className="float-right mt-[-60px] text-xl font-semibold text-purple-800 border border-purple-800 p-1 rounded-xl text-center "
            >
              X
            </p>
          </div>

          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Parent Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              value={formData.name}
              className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
            />
          </div>

          <div className=" w-full">
     
            <textarea
              name="message"
              placeholder="Enter Your Message"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            rows={5}
              value={formData.message}
              className=" inline border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800 "
            />
          </div>
          <div>
            <input
              name="avatar"
              type="file"
              accept="image/*"
              onChange={imageChangeHandler}
            />
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LeaveReview;
