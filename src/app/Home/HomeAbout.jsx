"use client"

import  { useState, useEffect } from 'react';
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
    <>
     

      <div className='mt-40 w-full md:p-10 p-2.5 h-[50]' style={HomeAboutStyles}>
        <span className='font-bold flex justify-center items-center font-poppins text-xl md:text-4xl'>
          WHY CHOOSE US ? . . .
        </span>
        <div className='md:flex md:items-center flex-col-reverse md:flex-row'>
          <div className='flex-1 mt-10'>
            <ul className=''>
              {trail.map((style, index) => (
                <animated.li key={index} className='text-sm font-poppins md:text-lg' style={style}>
                  <KeyboardDoubleArrowRightIcon />
                  {` ${WhyChooseUs[index]}`}
                </animated.li>
              ))}
            </ul>
          </div>
          <div className='flex flex-1 justify-center'>
            <animated.img
              className='md:h-[40rem] h-[20rem]'
              src='/model/RoboAbout.webp'
              alt='Harikrushna Multimedia classes'
              style={trail[WhyChooseUs.length - 1]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
