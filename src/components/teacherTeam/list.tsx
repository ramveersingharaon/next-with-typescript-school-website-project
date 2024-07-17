"use client";

import { deleteTeacherAction } from "@/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Teacher {
  _id: string;
  name: string;
  subject: string;
  avatar: {
    public_id: string;
    url: string;
  };
}

interface TeacherTeamListProps {
  auth: boolean;
  teachers: Teacher[];
}

const TeacherTeamList: React.FC<TeacherTeamListProps> = ({
  teachers,
  auth,
}) => {
  const router = useRouter();

  const deleteTeacherActionHandler = async (id: string) => {
    const result = await deleteTeacherAction(id);
    router.refresh();
    console.log(result);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10  ">
      {teachers.map((teacher) => (
        <div
          key={teacher._id}
          className="bg-purple-800 p-2 flex flex-col gap-2  leaveReviewContainerShadow hover:rounded-tl-[30%] hover:rounded-br-[30%] hover:translate-y-[-10px] duration-300"
        >
          <div className="p-5">

          <Image
            width={300}
            height={300}
            src={teacher.avatar.url}
            alt="teacherImage"
            className="h-[200px] w-[200px] sm:h-[200px] sm:w-[200px]  border hover:border-2 hover:scale-110 duration-300  border-white bg-white roundedShodow "
          />
          </div>
          <h1 className="text-2xl text-left   text-white px-2 font-bold">
            {teacher.name}
          </h1>
          <h1 className="text-xl text-right text-white px-2 mr-5 " >
            {teacher.subject}
          </h1>
          {auth && (
            <button onClick={() => deleteTeacherActionHandler(teacher._id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeacherTeamList;
