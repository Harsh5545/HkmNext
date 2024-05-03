"use client"


import React, { useState, useEffect, lazy, Suspense } from "react";
import TyperWriter from "./TyperWriter";
import { Canvas } from "@react-three/fiber";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../components/Button/Button";
import Loader1 from "../../components/Loader/Loader1";

const Experience = lazy(() => import("../../components/Experience/Experience"));

const Hero = () => {


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    const calculateRotation = (axis) => {
        const maxRotation = 1;
        const rotation = (typeof window !== 'undefined' ? (mousePosition[axis] / window.innerWidth - 1) : 0) * maxRotation;
        return rotation;
    };

    const handleDownload = () => {
        const url = '/harikrushnaMultimedia.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = 'harikrushnaMultimedia.pdf'; // Optional: specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div
            className="h-[100vh] opacity-1 w-full md:w-[95%] flex flex-col justify-center"
            style={{
                transform: `rotateX(${calculateRotation(
                    "y"
                )}deg) rotateY(${-calculateRotation("x")}deg)`,
            }}
        >
            <div className="flex flex-col mt-6 md:mt-2 select-none md:flex-row justify-between h-full items-center left-container">
                <div className="flex flex-col flex-1  items-start justify-end md:justify-start font-poppins text-white gap-1 md:gap-8">
                    <h2 data-aos="fade-left" className="flex text-2xl md:text-4xl">
                        Opportunity to Bring Your
                    </h2>
                    <h1 data-aos="fade-right" className="text-3xl md:text-5xl">
                        Creative Passion to Life
                    </h1>
                    <div className="flex flex-col gap-2 md:gap-8">
                        <h2 data-aos="fade-left" className="flex text-2xl md:text-4xl">
                            You Will Learn Here
                        </h2>
                        <div data-aos="fade-right">
                            <TyperWriter />
                        </div>
                    </div>
                    <Button value={"Download"} data-aos="flip-up" className="buttonn" onClick={handleDownload} />
                </div>
                <div className="flex-1 h-full w-full text-white">

                    <Suspense fallback={<Loader1 />}>
                        <Canvas>
                            <Experience />
                        </Canvas>
                    </Suspense>

                </div>
            </div>
        </div>
    );
};

export default Hero;
