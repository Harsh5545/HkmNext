"use client"

import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function StudentHeroSection() {
 const router = useRouter();
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            offset: 100,
        });
    }, []);

    return (
        <div className="h-[100vh]  flex justify-center items-center">
            <header className="bg-white w-full h-full flex items-center dark:bg-gray-900">
                <div className="container px-6 py-16 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full flex items-center md:justify-center justify-end lg:w-1/2">
                            <div className="lg:max-w-lg md:gap-5 flex flex-col">
                                <h1
                                    data-aos="fade-left"
                                    className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
                                >
                                    Student <span className="text-[#e9414d]">Project</span>
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    className="mt-4 text-gray-400 dark:text-gray-400"
                                >
                                    Explore the innovative projects created by students at
                                    Harikrushna Multimedia Institute. Our students showcase their
                                    skills and creativity through a diverse range of projects. Ready to embark on your own creative
                                    journey? Explore now and be inspired!
                                </p>
                                <div className="mt-6">
                                    <Button
                                        data-aos="fade-down"
                                        className="btn text-2xl p-1"
                                        onClick={() => router.push("/contact")}
                                        value={"Explore Now"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex md:items-center justify-center items-end w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Image data-aos="fade-right"
                                width={700}
                                height={400}
                                
                                src='/course/StudentProject.webp'
                                alt="Harikrushna Multimedia Institute Student IMAGE"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default StudentHeroSection;
