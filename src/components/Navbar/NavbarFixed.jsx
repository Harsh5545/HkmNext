"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import "./Navbar.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navVariants = {
  initial: {
    y: "-50%",
    x: "-50%",
  },
  animate: {
    y: 0,
    x: "-50%",
    transition: {
      duration: 0,
    },
  },
  exit: {
    y: -50,
    transition: {
      duration: 0,
    },
  },
};

function NavbarFixed() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navInput, setNavInput] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setNavInput((prev) => !prev);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    toggleMobileMenu();
  };
  const router = useRouter()

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] nav top-2 left-1/2 -translate-x-1/2 rounded-xl px-2 flex-col backdrop-blur-lg border justify-between md:p-2 flex md:flex-row items-center"
      style={{ width: "75%" }}
    >
      <div className="flex justify-between items-center w-full md:w-0">
        {/* <span className="text-xl">
          <Image width={100} height={100} src="/assets/logo.png" className="md:max-w-20 max-w-10" alt="HarikrushnaMultimedia institue logo" />
        </span> */}
        <Link href="/" passHref>
          <span className="text-xl cursor-pointer">
            <Image
              src="/assets/logo.png"
              width={100}
              height={100}
              className="md:max-w-20 max-w-14"
              alt="Harikrushna Multimedia Institute logo"
            />
          </span>
        </Link>
        <div className="md:hidden">
          <label className="hamburger">
            <input type="checkbox" onChange={toggleMobileMenu} checked={navInput} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <ul
          className={`flex flex-col md:flex-row font-poppins items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
            }`}
        >
          <li>
            <Link href="/" className=" hover:text-black" onClick={() => handleNavLinkClick("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" hover:text-black" onClick={() => handleNavLinkClick("/about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-black" onClick={() => handleNavLinkClick("/course")}>
              Course
            </Link>
          </li>
          <li>
            <Link href="/student-project" className=" hover:text-black" onClick={() => handleNavLinkClick("/student-project")}>
              Student Project
            </Link>
          </li>
        </ul>
      </div>

      <div className={`${isMobile ? (isMobileMenuOpen ? "block" : "hidden") : "flex"
        }`}>
        <Button
          value={"Free Consultation"}
          className="
              buttonn "
          onClick={() => {
            router.push("/contact");
            toggleMobileMenu()
          }}
        />
      </div>
    </motion.div>
  );
}

export default NavbarFixed;
