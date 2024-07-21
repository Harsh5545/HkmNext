"use client";

import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import { CourseDetails } from "../../helpers/Constant";
import "./Course.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";


const CourseMiddle = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

    
 
  return (
    <div className="flex py-12 justify-center bg-gray-100 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CourseDetails.map((course) => (
           
          <div

            key={course.id}
            className="flex m-5 flex-col items-center justify-center"
            data-aos={course.id % 2 ? "fade-right" : "fade-left"}
          > {console.log(course.course)}
            <img
              src={course.path}
              width={500}
              className="rounded-lg aspect-video object-fill shadow-xl"
              alt={course.alt}
            />
            <h1 className="m-2 md:text-3xl text:2xl ">{course.course}</h1>
            <p className="p-1 md:w-[60%] text-center mb-5 md:text-lg text-sm">
              {course.description}
            </p>
            <Link
                href={`/courses/${course.course.toLowerCase().replace(/\s+/g, '-')}`}

              className="p-4 button-course"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {course.button.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMiddle;
