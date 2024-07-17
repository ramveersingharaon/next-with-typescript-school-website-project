"use client";
import { LoginAction } from "@/actions";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    email,
    password,
  };

  const router = useRouter();

  const loginActionHandler = async () => {
    try {
      const result = await LoginAction(formData);
      router.push("/admin");

      console.log(result);
    } catch (error) {
      console.log("this is comming from client ", error);
    }
  };

  return (
    <>
      <div className="bg-purple-800 h-[85px]"></div>
      <section className=" w-full py-10 flex items-center justify-center bg-white  ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col px-5">
          <div className="mb-10">
            <div className="relative inline mb-10 ">
              <h1 className=" text-center text-4xl text-purple-800 font-bold  hedingUnderLine inline ">
                ADMIN LOGIN
              </h1>
            </div>
          </div>

          <form
            action={loginActionHandler}
            className="flex items-center flex-col gap-5  p-20 leaveReviewContainerShadow"
          >
            <div>
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                value={email}
                className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
              />
            </div>

            <div>
            <input
                type='password'
                name='password'
                placeholder='Enter Your Password'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                value={password}
                className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
              />
            </div>

            <Button>Submit</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
