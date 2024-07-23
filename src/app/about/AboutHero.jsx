"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const calculateRotation = (axis) => {
    const maxRotation = -20;
    if (typeof window !== "undefined") {
      const rotation =
        (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
      return rotation;
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="flex justify-center md:items-end items-center h-full min-h-fit">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-end">
          <Image
            style={{
              transform: `rotateX(${calculateRotation(
                "y"
              )}deg) rotateY(${-calculateRotation("x")}deg)`,
            }}
            src="/course/About.webp"
            width={550}
            height={300}
            alt="About PNG Image of www.HarikrushnaMultimedia.com"
          />
        </div>
        <div
          data-aos="fade-up"
          className="container px-3 flex justify-center items-center mx-auto"
        >
          <div className="text-center">
            <p
              className="text-2xl md:text-6xl font-bold text-[#e9414d]"
              data-aos="fade-right"
            >
              About us
            </p>

            <h1
              className="mt-2 md:text-4xl text-2xl font-semibold text-gray-800"
              data-aos="fade-left"
            >
              Explore the World of Creativity
            </h1>

            <p
              className="mt-3 text-2xl text-gray-500 "
              data-aos="fade-up"
            >
              Join us on a creative adventure where your ideas come to life. Our
              team is passionate about turning <b>imagination into reality</b>, and we
              can't wait to share this journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
