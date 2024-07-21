"use client"

import React, { useEffect } from "react";

import { CourseData } from "../../helpers/Constant";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Button from "../../components/Button/Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function HomeMiddle() {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay: true,
  };
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleButtonClick = (courseSlug) => {
    router.push(`/courses/${courseSlug.toLowerCase().replace(/\s+/g, '-')}`);
  };
  return (
    <div className="w-full font-poppins  flex justify-center ">
      <div className="w-[90%] rounded-3xl flex md:py-1 py-8 flex-col md:flex-col shadow-2xl md:mt-[-3rem] mt-[-1rem] bg-white z-10">
        <div
          data-aos="fade-up"
          className=" overflow-hidden md:p-8 p-4 flex md:justify-between md:flex-row flex-col  md:items-center w-full"
        >
          <h2 className="md:text-4xl text-2xl">
            Explore
            <p className=" font-extrabold">Our Popular Courses</p>
          </h2>
          <Link
            href="/courses"
            className="hover:scale-110 hover:text-blue-500 transition-transform"
            onClick={() => handleNavLinkClick()}
          >
            <p>
              Browse Online Courses
              <span>
                <TrendingFlatIcon />
              </span>
            </p>
          </Link>
        </div>
        <div className="hidden md:visible md:flex">
          {CourseData.map((course, index) => (
            <div
              className="flex-1 flex justify-center my-2 px-2 md:px-14 text-center gap-6 items-center flex-col transition-all duration-1000 transform text-sm "
              key={index}
              data-aos="fade-right" 
            >
              <img
                src={course.image}
                alt={course.alt}
                style={{ height: "15rem" }}
                className={`transition-transform duration-300 transform hover:scale-95 hover:-translate-y-2 hover:rotate-x-12 hover:rotate-y-12 homeMiddleImg${index}`}
              />
              <h3 className="font-semibold md:text-2xl text-xl font-poppins">
                {course.course}
              </h3>
              <p className="font-poppins">{course.description}</p>
              <Button value={course.buttonText} onClick={() => handleButtonClick(course.course)} className="p-1 btn" />
            </div>
          ))}
        </div>

        <div>
          <div className="visible md:hidden ">
            <Slider {...settings}>
              {CourseData.map((course, index) => (
                <div
                  className={`flex-1 flex justify-center  px-2 md:px-14 text-center gap-6 items-center flex-col transition-all duration-1000 transform text-sm `}
                  key={index}
                  data-aos= "fade-right"
                >
                  <img
                    src={course.image}
                    alt={course.alt}
                    style={{ height: "15rem" }}
                    className={`transition-transform duration-300 mx-auto transform hover:scale-95 flex items-center hover:-translate-y-2 hover:rotate-x-12 hover:rotate-y-12 homeMiddleImg${index}`}
                  />
                  <h3 className="font-semibold md:text-2xl text-xl font-poppins">
                    {course.course}
                  </h3>
                  <p className="font-poppins">{course.description}</p>
                  <Button value={course.buttonText} onClick={() => handleButtonClick(course.course)} className="p-1 btn" />
                </div>
              ))}
              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMiddle;
