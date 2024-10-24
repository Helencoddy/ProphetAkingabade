import React from "react";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="md:w-[50%] w-full mx-auto flex justify-center pb-10 gap-10 md:flex-nowrap flex-wrap flex-row">
          <div className="bg-[url('/3aa.jpg')] bg-cover md:w-[50%] w-full h-96 md:h-96">
            {/* <Image src="/dxtr.jpg" width={300} height={50}></Image> */}
          </div>
          <div className="md:w-[50%] w-full px-3 py-3">
            <p className="text-4xl font-semibold text-[#060E62]">
              The Man <br /> The Mandate <br />
              The Prophet
            </p>
            <div className="">
              <blockquote className="mt-6">
                Prophet Akingbade is on an Apostolic mission to reclaim a
                generation, restore the fire, and revive a people. God has
                called him to set his generation ablaze and ignite the upcoming
                generation. He carries out his God-given assignment doggedly and
                with urgency, knowing that will give account to the One that
                called him.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:w-[50%] w-full mx-auto flex justify-center pb-10 gap-10 md:flex-nowrap flex-wrap flex-row">
          <div className="bg-[url('/dxtr.jpg')] bg-cover md:w-[50%] w-full h-96 md:h-96">
            {/* <Image src="/dxtr.jpg" width={300} height={50}></Image> */}
          </div>
          <div
            className="md:w-[70%] w-full px-3 py-3 md:shadow-xl md:rounded-md"
            // style={{
            //   boxShadow: "(0 1rem 3rem rgba(0, 0, 0, 0.07)",
            // }}
          >
            <div className="px-5 py-5">
              <blockquote className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, enim ullam quos provident possimus, laboriosam
                cupiditate velit esse quibusdam sapiente voluptates inventore
                fugiat delectus quisquam? Aperiam est placeat optio molestiae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                ut, minus provident eum pariatur culpa libero porro possimus.
                Nesciunt dolore consequatur rerum inventore corporis amet aut
                quod! Ratione, velit sunt.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:w-[50%] w-full mx-auto flex justify-center pb-10 gap-10 md:flex-nowrap flex-wrap flex-row">
          <div className="bg-[url('/1.jpg')] bg-cover md:w-[50%] w-full h-96 md:h-96">
            {/* <Image src="/dxtr.jpg" width={300} height={50}></Image> */}
          </div>
          <div className="md:w-[70%] w-full px-3 py-3 md:shadow-xl md:rounded-md">
            {/* <p className="text-4xl font-semibold text-[#060E62]">
              The Man <br /> The Mandate <br />
              The Isaac Oyedepo
            </p> */}
            <div className="px-5 py-5  ">
              <blockquote className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, enim ullam quos provident possimus, laboriosam
                cupiditate velit esse quibusdam sapiente voluptates inventore
                fugiat delectus quisquam? Aperiam est placeat optio molestiae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                ut, minus provident eum pariatur culpa libero porro possimus.
                Nesciunt dolore consequatur rerum inventore corporis amet aut
                quod! Ratione, velit sunt.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
