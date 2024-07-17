// pages/index.js
import Facilities from "@/components/facilities";
import Layout from "../components/Layout";
import TeacherTeam from "@/components/teacherTeam/list";
import WhyIChooseUs from "@/components/whyIChoose";
import ParentsReview from "@/components/parentsReview";
import Footer from "@/components/Footer";
import Button from "@/components/UI/Button";
import LeaveReview from "@/components/parentsReview/leaveReview";
import { getReviewAction, getTeacherAction } from "@/actions";

export default async function Home() {
  const getReviews = await getReviewAction();
  const getTeacher = await getTeacherAction();

  const auth = false;

  const reviewsList = getReviews?.data;
  const teachers = getTeacher?.data;

  return (
    <Layout>
      <section className="w-full h-screen bg-hero heroBefore bg-cover relative ">
        <div className="max-w-[1240px] mx-auto relative px-5">
          <div className="flex items-center justify-center flex-col text-white gap-5 h-screen">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[.20em]">
              WELCOME TO
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[.20em] text-center">
              SS PATHARIA PUBLIC SCHOOL
            </h1>
            <p className=" text-lg sm:text-xl text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              accusamus earum quod, molestiae expedita porro soluta illum
              voluptatum, quae laborum delectus alias.
            </p>
            <Button>REGISTER NOW</Button>
          </div>
        </div>
      </section>

      {/* //Teacher Team section */}
      <section className=" w-full py-10 flex items-center justify-center bg-white">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col">
          <div>
            <div className="relative inline mt-5">
              <h1 className=" text-center text-2xl sm:text-4xl text-purple-800 font-bold mt-2 hedingUnderLine inline ">
                TEACHER TEAM
              </h1>
            </div>
          </div>

          <TeacherTeam auth={auth} teachers={teachers} />
        </div>
      </section>
      {/* //Why I choose us section */}
      <section className=" w-full py-10 flex items-center justify-center bg-purple-800">
        <div className="max-w-[1240px]  mx-auto flex items-center flex-col px-5">
          <div>
            <div className="relative inline mt-5">
              <h1 className=" text-center text-2xl sm:text-4xl text-white font-bold mt-2 hedingUnderLine inline ">
                WHY I CHOOSE US?
              </h1>
            </div>
          </div>

          <WhyIChooseUs />
        </div>
      </section>
      {/* //Parents Review  section */}
      <section className=" w-full py-10  bg-white  ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col">
          <div className="mb-10">
            <div className="relative inline  ">
              <h1 className=" text-center sm:text-4xl text-2xl text-purple-800 font-bold  hedingUnderLine inline ">
                PARENT REVIEWS
              </h1>
            </div>
          </div>

          <div className="w-full">
            <ParentsReview auth={auth} reviews={reviewsList} />
          </div>
          <div className="w-[85%] sm:w-[60%] md:w-[50%] mt-10 mb-[-100px]">
            <LeaveReview />
          </div>
        </div>
      </section>
    </Layout>
  );
}
