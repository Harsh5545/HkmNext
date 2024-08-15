"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import TyperWriter from "./TyperWriter";
import { Canvas } from "@react-three/fiber";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../components/Button/Button";
import Loader1 from "../../components/Loader/Loader1";

// Lazy loading Experience component
const Experience = lazy(() => import("../../components/Experience/Experience"));

// Custom ErrorBoundary component for catching errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Oops! Something went wrong while loading the 3D model.</div>;
    }
    return this.props.children;
  }
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration for faster effects
      easing: 'ease-out-cubic', // Choose an easing function
      once: true, // Only animate once
      anchorPlacement: 'top-bottom', // When animation should trigger
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Debounce mouse move for better performance
    const debounceMouseMove = debounce(handleMouseMove, 10);

    window.addEventListener("mousemove", debounceMouseMove);

    return () => {
      window.removeEventListener("mousemove", debounceMouseMove);
    };
  }, []);

  const calculateRotation = (axis) => {
    const maxRotation = 2; // Reduced rotation effect for subtle interaction
    const rotation =
      (typeof window !== "undefined"
        ? (mousePosition[axis] / window.innerWidth - 0.5) // Centering the rotation calculation
        : 0) * maxRotation;
    return rotation;
  };

  const handleDownload = () => {
    const url = "/harikrushnaMultimedia.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "harikrushnaMultimedia.pdf"; // Optional: specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="h-[100vh] w-full md:w-[95%] flex flex-col justify-center p-1 md:p-8"
      style={{
        transform: `rotateX(${calculateRotation("y")}deg) rotateY(${-calculateRotation("x")}deg)`,
        perspective: "800px", // Adjusted perspective for more realistic 3D effect
      }}
    >
      <div className="flex flex-col gap-1 md:mt-2 select-none md:flex-row justify-between h-full items-center">
        <div className="flex flex-col flex-1 items-start justify-end md:justify-start font-poppins text-white gap-4 md:gap-6 p-1 md:p-4">
          <h3
            className="text-2xl md:text-4xl font-medium leading-tight tracking-wide"
            data-aos="fade-right" // Adjust animation type or remove if needed
          >
            Opportunity to Bring Your
          </h3>
          <h1
            className="text-2xl md:text-4xl font-medium leading-tight tracking-wide"
            data-aos="fade-right" // Adjust animation type or remove if needed
          >
            Creative Passion to Life
          </h1>
          <div className="flex flex-col gap-4 md:gap-6">
            <h6
              className="text-2xl md:text-4xl font-medium leading-tight tracking-wide"
              data-aos="fade-right" // Adjust animation type or remove if needed
            >
              You Will Learn Here
            </h6>
            <div className="text-2xl md:text-4xl">
              <TyperWriter />
            </div>
          </div>
          <Button
            value={"Download"}
            data-aos="flip-up"
            className="bg-[#e9414d] text-white py-3 px-6 rounded-full mt-4 transition-colors duration-300 ease-in-out shadow-lg"
            onClick={handleDownload}
          />
        </div>
        <div className="flex-1 h-full w-full text-white p-4 md:p-0">
          <Suspense fallback={<Loader1 />}>
            <ErrorBoundary>
              <Canvas>
                <Experience />
              </Canvas>
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

// Debounce function to reduce excessive calls
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default Hero;
