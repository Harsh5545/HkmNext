"use client"

import { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './homeStyles.css';
import { WhyChooseUs } from '../../helpers/Constant';

function HomeAbout() {
  const HomeAboutStyles = {
    background: 'linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)',
    color: 'white',
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const trail = useTrail(WhyChooseUs.length, {
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateX(0)' : 'translateX(-50px)',
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col py-6 justify-center items-center w-full h-full min-h-screen mt-40"
      style={HomeAboutStyles}
    >
      <span className="font-bold text-center font-poppins text-xl md:text-4xl mb-10">
        WHY CHOOSE US? . . .
      </span>
      <div className="flex flex-col md:flex-row items-center  justify-between md:justify-center gap-8 w-full">
        <animated.div className="flex-1 px-1 flex flex-col items-center justify-center gap-4">
          <ul className="space-y-3">
            {trail.map((style, index) => (
              <animated.li
                key={index}
                className="text-sm md:text-lg flex items-center font-poppins"
                style={style}
              >
                <KeyboardDoubleArrowRightIcon className="mr-2" />
                {WhyChooseUs[index]}
              </animated.li>
            ))}
          </ul>
        </animated.div>
        <div className="flex-1 flex justify-center ">
          <animated.img
            className="w-full  lg:w-2/3 max-h-[40rem] h-auto object-contain"
            src="/model/RoboAbout.webp"
            alt="Harikrushna Multimedia classes"
            style={trail[WhyChooseUs.length - 1]}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
