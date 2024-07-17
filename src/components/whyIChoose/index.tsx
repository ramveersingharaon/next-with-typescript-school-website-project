import React from "react";
import Image from "next/image";

const WhyIChooseUs = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
      <div>
        <Image
          src="/why_choose.webp"
          width={500}
          height={500}
          alt="whyIChooseUsImage"
        />
      </div>
      <div className="text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas
          in et? Rem magni aliquam fuga iusto odit nemo porro fugit, maiores,
          molestias doloribus obcaecati quae est modi sint? Blanditiis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Officia quasi
          impedit eaque dolores accusantium, tenetur autem, rem voluptates
          doloribus deleniti, iste illo eligendi! Repudiandae, mollitia fugit
          autem voluptatum minima magni!
        </p>
      </div>
    </div>
  );
};

export default WhyIChooseUs;
