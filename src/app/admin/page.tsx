"use client";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Admin = () => {
    const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-purple-800 h-[85px]"></div>
      <section className=" w-full py-10 flex items-center justify-center bg-white  ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col px-5">
          <div className="mb-10">
          <div className="relative inline  ">
            <h1 className=" text-center text-2xl sm:text-4xl text-purple-800 font-bold  hedingUnderLine inline ">
              ADMIN PANNEL
            </h1>
          </div>
          </div>
          
          <form
            action=""
            className="flex items-center flex-col gap-5 border-2 border-black p-20"
          >
            <div>
              <label> email:</label>
              <Input
                type={"email"}
                name={"email"}
                placeholder={"Enter Email"}
                onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
            </div>

            <div>
              <label> Password:</label>
              <Input
                type={"password"}
                name={"password"}
                placeholder={"Enter Password"}
                onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                value={password}
              />
            </div>

            <Button>Submit</Button>
          </form>
          <div>
           
            <button onClick={()=>router.push('/admin/teacher')}>Teacher</button>
            <button onClick={()=>router.push('/admin/review')} >Review</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
