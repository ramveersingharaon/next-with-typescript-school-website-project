"use client";
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


import { addTecherAction } from "@/actions";

const TeacherTeamForm = () => {
  const initialState = {
    name: "",
    subject: "",
    avatar: "",
  };

  const [formData, setFormData] = useState(initialState);

  const router = useRouter();
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const addTeacherActionHandler = async () => {
    try {
      const result = await addTecherAction(formData);
      console.log(result);
      console.log(formData);

      setFormData(initialState);
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className=" w-full py-10 flex items-center justify-center bg-white  ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col px-5 gap-4">
          <div className="text-center leaveReviewContainerShadow">
            
            <form
              action={addTeacherActionHandler}
                 className="flex items-center flex-col gap-5 p-20"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Teacher Name"
                  onChange={onchangeHandler}
                  value={formData.name}
                  className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
                />
              </div>

              <div>
         
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Teacher Subject"
                  onChange={onchangeHandler}
                  value={formData.subject}
                  className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
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
      </section>
    </>
  );
};

export default TeacherTeamForm;