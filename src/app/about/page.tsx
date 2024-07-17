// pages/about.js
export default function About() {
  return (
    <>
      <div className="bg-purple-800 h-[85px]"></div>
      <section className="w-full py-10 flex items-center justify-center mb-[-120px]">
        <div className="lg:max-w-[1240px] w-full mx-auto flex items-center flex-col ">
          <div className="mb-10">
          <div className="relative inline mt-5">
            <h1 className="text-center text-4xl text-purple-800 font-bold mt-2 hedingUnderLine inline ">
              ABOUT US
            </h1>
          </div>
          </div>
         
          <div className="flex md:flex-row flex-col gap-10 mt-10 ">
            <div className="md:w-[50%] w-[90%] mx-auto border-2 border-purple-800 rounded">
              <img src="./about.webp" alt="schoolImage" />
            </div>
            <div className="md:w-[50%] w-[90%] mx-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, nostrum reiciendis illum adipisci tempore quaerat sequi
                recusandae temporibus eligendi non harum architecto laudantium
                dolores ex animi rem voluptas, at repudiandae eos culpa
                voluptate! Eveniet architecto aut id hic laborum sint, ducimus
                illum et excepturi, eius, ab natus temporibus! Exercitationem
                nobis ex consequuntur, sint eaque enim illum magnam? Voluptatem
                porro nemo esse vero cumque pariatur nulla minus. Voluptatibus
                itaque hic soluta repellat vero. Omnis quibusdam accusamus
                veritatis dignissimos, inventore placeat animi laborum, sequi
                eaque officiis delectus vero! Dicta asperiores dolore soluta non
                eveniet suscipit, necessitatibus, in nihil eaque, impedit
                aperiam aliquam debitis aspernatur. Consectetur, eaque nisi?
                Excepturi reprehenderit voluptatem ea reiciendis. Hic quod
                tenetur sint necessitatibus labore molestias unde nulla
                dignissimos. Reprehenderit quas quod autem libero nemo. Tenetur
                aliquam maiores inventore blanditiis dicta consequatur ad ullam,
                quis dignissimos ea, debitis porro, minus soluta amet! Cum
                consequuntur vel cupiditate vero. Earum distinctio numquam id
              </p>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}
