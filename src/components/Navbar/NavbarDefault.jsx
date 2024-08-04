import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NavbarDefault() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navInput, setNavInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const [isInWhiteSection, setIsInWhiteSection] = useState(true); // State to track background section

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setNavInput((prev) => !prev);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
      setNavInput(false);
    }
  }, [isMobile]);

  useEffect(() => {
    // Set up Intersection Observer to track sections
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInWhiteSection(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // Observe the target element (the white background section)
    const target = document.getElementById("white-background-section");
    if (target) {
      observer.observe(target);
    }

    // Clean up observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    // Event listener to track scroll position for styling
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine navbar styles based on scroll and section position
  const navbarStyles = `flex z-[999] absolute w-full justify-center items-center ${
    isScrolled && !isInWhiteSection ? "navbar-dark" : "navbar-light"
  }`;

  return (
    <div className={navbarStyles}>
      <div className="flex-col md:flex-row flex justify-between px-1 md:px-10 rounded-md w-[90%] items-center backdrop-filter backdrop-blur-md bg-white py-1 mt-4 ">
        <div className="flex justify-between items-center w-full md:w-0">
          <Link href="/" passHref>
            <span className="text-xl cursor-pointer">
              <Image
                src="/assets/logo.png"
                width={110}
                height={110}
                className="md:max-w-[8rem] max-w-[6rem]"
                alt="Harikrushna Multimedia Institute logo"
              />
            </span>
          </Link>
          <div className="md:hidden">
            <label className="hamburger">
              <input
                type="checkbox"
                onChange={toggleMobileMenu}
                checked={navInput}
              />
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
          <div>
            <ul
              className={`flex flex-col md:flex-row font-poppins items-center gap-8 md:gap-4 h-[20rem] md:h-0 justify-center text-black font-medium font-jakarta ${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex`}
            >
              <li>
                <Link
                  href="/"
                  className=" hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  href="/student-project"
                  className=" hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  Student Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex gap-2 flex-col-reverse md:flex-row items-center justify-center`}
        >
          <Button
            value={"Free Consultation"}
            className="buttonn p-1"
            onClick={() => {
              router.push("/contact");
              toggleMobileMenu();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarDefault;
