'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import TyperWriter from './TyperWriter';
import { Canvas } from '@react-three/fiber';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../components/Button/Button';
import Loader1 from '../../components/Loader/Loader1';

const Experience = lazy(() => import('../../components/Experience/Experience'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center text-red-500">Oops! Something went wrong while loading the 3D model.</div>;
    }
    return this.props.children;
  }
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const debounceMouseMove = debounce(handleMouseMove, 10);

    window.addEventListener('mousemove', debounceMouseMove);

    return () => {
      window.removeEventListener('mousemove', debounceMouseMove);
    };
  }, []);

  const calculateRotation = (axis) => {
    const maxRotation = 1.5;
    return (
      (typeof window !== 'undefined'
        ? mousePosition[axis] / window.innerWidth - 0.5
        : 0) * maxRotation
    );
  };

  const handleDownload = () => {
    const url = '/harikrushnaMultimedia.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'harikrushnaMultimedia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="min-h-screen w-full lg:w-[95%] mx-auto flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        transform: `rotateX(${calculateRotation('y')}deg) rotateY(${-calculateRotation('x')}deg)`,
        perspective: '1000px',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-8 lg:gap-12">
        <div className="flex flex-col w-full lg:w-1/2 items-start justify-center font-poppins text-white space-y-6 md:space-y-8">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-wide"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Opportunity to Bring Your
          </h3>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Creative Passion to Life
          </h1>
          <div className="space-y-4 md:space-y-6">
            <h6
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-wide"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              You Will Learn Here
            </h6>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
              <TyperWriter />
            </div>
          </div>
          <Button
            value="Download Brochure"
            data-aos="flip-up"
            data-aos-delay="400"
            className="bg-[#e9414d] text-white py-3 px-6 rounded-full mt-4 transition-all duration-300 ease-in-out shadow-lg hover:bg-[#d13b46] hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            onClick={handleDownload}
          />
        </div>
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default Hero;
