"use client"

import React, { useEffect, useState } from "react";
import { testimonialsData } from "../../helpers/Constant";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeReview() {

    useEffect(() => {

        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            offset: 100,
        });

    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (direction) => {
        const totalTestimonials = testimonialsData.length;

        if (direction === "left") {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
            );
        } else if (direction === "right") {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <div className="overflow-hidden">
            <section className="bg-white ">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

                    <div data-aos="fade-up" className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1

                            className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl "
                        >
                            What our <span className="text-[#e9414d]">customers</span> are
                            saying
                        </h1>

                        <div data-aos="fade-up" className="mt-10 lg:mt-20 lg:flex lg:items-center">
                            <img

                                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                                src={currentTestimonial.photo}
                                alt="Harikrushna Multimedia"
                            />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <h1

                                    className="text-2xl font-semibold text-gray-800  lg:w-72"
                                >
                                    {currentTestimonial.contentHeading}
                                </h1>

                                <p

                                    className="max-w-lg mt-6 text-gray-500 "
                                >
                                    {currentTestimonial.content}
                                </p>

                                <h3
                                    data-aos="fade-down"
                                    className="mt-6 text-lg font-medium text-[#e9414d]"
                                >
                                    {currentTestimonial.name}
                                </h3>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex items-center justify-between mt-12 lg:justify-start"
                        >
                            <button
                                onClick={() => handleNavigation("left")}
                                title="left arrow"
                                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  hover:bg-gray-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={() => handleNavigation("right")}
                                title="right arrow"
                                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:mx-6 hover:bg-gray-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeReview;
