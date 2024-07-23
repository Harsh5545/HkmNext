"use client";

import React from "react";
import "./About.css";
import FAQSection from "@/components/Faq/Faq";


function AboutMiddle() {

  const bgColor = {
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
  }

  return (
    <div className="py-16 overflow-hidden bg-gray-100 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold pb-10 text-[#e9414d] mb-8 text-center">
          About Our Institute
        </h1>
        <div className="grid grid-cols-1 px-4 md:pl-5 md:grid-cols-2 gap-5 ">
          <div className="md:col-span-1 flex flex-col justify-center m-1">
            <p className="text-gray-700  text-lg">
              Welcome to
              <b className="font-bold"> Harikrushna Multimedia Institute</b>
              , located in Surat, Gujarat. We take pride in offering a diverse
              range of creative courses that empower aspiring individuals in the
              fields of <b>multimedia</b>,<b>animation</b> , and <b>design</b>.
            </p>
            <p className="text-gray-700  text-lg mt-4">
              Our institute is equipped with state-of-the-art facilities and
              experienced instructors who are passionate about nurturing talent.
              Whether you are interested in <b>3D Architectural Design</b>, <b>Video Editing</b>, <b>Game Design</b> , <b>3D Animation</b>, <b>Visual Effects</b>, <b>2D Animation</b>, <b>3D Jewellery Design</b>, <b>Graphics Design</b>, <b>"Program in Graphics & Animation"</b>, <b>"Program in Game Design"</b> we have a course tailored for you.
            </p>

            <p className="text-gray-700  text-lg">
              At Harikrushna Multimedia Institute, we believe in fostering
              creativity, innovation, and technical excellence. Our mission is
              to empower individuals to turn their passion for multimedia into a
              fulfilling and successful career. Join us on a journey of
              learning, collaboration, and skill development that will open
              doors to exciting opportunities in the multimedia industry.
            </p>
            <p className="text-gray-700  text-lg mt-4">
              Explore our courses, engage with our vibrant community, and embark
              on a rewarding educational experience. Feel free to reach out to
              us for any inquiries or assistance. We look forward to being part
              of your creative journey.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="card w-[24rem] md:w-[31rem] h-[28rem] md:h-[41rem] ">
              <div className="bg w-[25rem] md:w-[30rem] h-[29rem] md:h-[40rem]">
                <img src="/course/AboutUs.webp" alt="" className="h-full" width={550} />
              </div>
              <div className="blob"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-10 px-5 md:my-32  my-20 ">
        <h2 className="text-[#0F406D] my-10 mx-10 font-bold text-2xl md:text-5xl">
          Our Mission <span className="text-[#e9414d] ">& Vision</span>
        </h2>
        <div style={bgColor} className="md:p-10 p-5 m-5 rounded-3xl text-center grid grid-cols-1 md:grid-cols-2">
          <div className="text-[#fff]">
            <h1 className="font-bold text-xl md:text-4xl">Our Mission</h1>
            <p className="md:p-10 p-4 md:text-2xl text-md">
              At <span className="font-medium">Harikrushna Multimedia</span>, we empower students through innovative education, fostering independence and critical thinking.
            </p>
          </div>
          <div className="pt-5 md:pt-0 text-[#fff]">
            <h3 className="font-bold text-xl md:text-4xl">Our Vision</h3>
            <p className="md:p-10 p-4 md:text-2xl text-md">
              <span className="font-medium ">Harikrushna Multimedia's</span> vision is to shape futures through cutting-edge animation education, inspiring artistic excellence and industry leadership.
            </p>
          </div>
        </div>


      </div>
<FAQSection/>
    </div>
  );
}

export default AboutMiddle;
