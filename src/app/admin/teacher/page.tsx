import { deleteTeacherAction, getTeacherAction } from "@/actions";
import TeacherTeamForm from "@/components/teacherTeam/form";
import TeacherTeamList from "@/components/teacherTeam/list";
import Link from "next/link";

const Teacher = async () => {
  const auth = true;



  const teacherList = await getTeacherAction();

  const teachers = teacherList?.data;
  return (
    <>
      <div className="bg-purple-800 h-[60px]"></div>
      <section className=" w-full py-10 flex items-center justify-center bg-white  ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col px-5 gap-4">
          <div className="text-center">
            <div className="relative inline">
              <h1 className=" text-center text-2xl sm:text-4xl text-purple-800 font-bold  hedingUnderLine inline ">
                TEACHER TEAM
              </h1>
            </div>
          </div>
          <div className="w-full">
            <TeacherTeamForm />
          </div>
          <div className="w-full">
            <TeacherTeamList auth={auth} teachers={teachers} />
          </div>
          <div>
            <Link href="/admin">
             
              <p>Back</p>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Teacher;
