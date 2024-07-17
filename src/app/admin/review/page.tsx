import { getReviewAction } from "@/actions";
import ParentsReview from "@/components/parentsReview";

import Link from "next/link";

const Review = async () => {
  const getReviews = await getReviewAction();

  const reviewsList = getReviews?.data;

  const auth = true

  return (
    <>
      <div className="bg-purple-800 h-[85px]"></div>
      <section className=" w-full py-10 border-2 ">
        <div className="max-w-[1240px] mx-auto flex items-center flex-col  gap-4 ">
          <div className="text-center">
            <div className="relative inline">
              <h1 className=" text-center text-2xl sm:text-4xl text-purple-800 font-bold  hedingUnderLine inline ">
                PARENT REIVEW
              </h1>
            </div>
          </div>
          <div className="w-full mt-5">
            <ParentsReview auth = {auth} reviews={reviewsList} />
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

export default Review;


