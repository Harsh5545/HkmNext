"use client";
import ContactForm from '@/components/ContactForm/ContactForm';
import FAQSection from '@/components/Faq/Faq';
import AOS from 'aos';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button } from '@mui/material';
import VerticalCarousel from '@/components/slider/VerticalCarousel';
import { CourseDetails, coursePage } from '@/helpers/Constant';

const page = ({ params }) => {
    const { slug } = params;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [course, setCourse] = useState([]);
    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const CourseHighlights = [
        "Job-oriented, industry-centric curriculum",
        "Hands-on practical training using the latest tools and software",
        "Certified faculty ensuring quality education",
        "Exposure to industry interaction and engaging workshops",
        "Placement assistance for a successful career launch",
        "Knowledge of AI",
    ];
    const router = useRouter();

    const backgroundStyles = {
        backgroundImage: `url(${course.HeaderImage})`, // Use backticks for string interpolation
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
        // background:"blue "
    };

    const bgOverlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background:
            "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
        opacity: 0.74,
        height: "100vh",
    };

    useEffect(() => {
      
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            offset: 100,
        });
        const details = CourseDetails.filter(course => course.course === slug.replace(/%20/g, ' '));
        setCourse(details[0]);
    }, []);
    const calculateRotation = (axis) => {
        const maxRotation = -10;
        const rotation =
            (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
        return rotation;
    };
    

    return (
        <div className=" font-poppins overflow-hidden mx-auto">
            <div className="" style={backgroundStyles}>
                <div style={bgOverlayStyle}></div>
                <div className="mb-8 h-[100vh] flex md:flex-row flex-col-reverse justify-center items-center">
                    <div
                        style={{
                            transform: `rotateX(${calculateRotation(
                                "y"
                            )}deg) rotateY(${-calculateRotation("x")}deg)`,
                        }}
                        className="flex-1"
                    
                    >
                        <Image width={700} onMouseMove={handleMouseMove} height={600} data-aos="fade-down-right" src={course.PngImage} className=" " alt={course.alt} />
                    </div>

                    <div
                        data-aos="fade-down-left"
                        className="flex-1 flex justify-end mt-24 flex-col items-center  text-center"
                    >
                        <h1
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: "white" }}
                        >
                            {course.heading}
                        </h1>
                        <p
                            className="text-md md:text-xl w-[90%]"
                            style={{ color: "white" }}
                        >
                            {course.headingPara}{" "}
                        </p>{" "}
                        {/* <p
                            className="invisible md:visible text-md md:text-xl w-[90%]"
                            style={{ color: "white" }}
                        >
                            This is done by using computer software to create and manipulate
                            digital objects, or by MUL DIA INS using specialized hardware such
                            as motion capture.
                        </p>{" "} */}
                    </div>
                </div>
            </div>

            {/* COURSE HIGHLIGHTS section */}

            <div className="flex md:h-[80vh] flex-col md:flex-row items-center justify-center">
                <div
                    data-aos="zoom-in-up"
                    className="m-10 flex-1 flex justify-between flex-col"
                >
                    <h1 className="md:text-5xl text-3xl text-center font-bold mb-4">
                        COURSE HIGHLIGHTS
                    </h1>
                    <ul className="list-disc pl-6">
                        {CourseHighlights.map((highlight, index) => (
                            <li key={index} className="mb-2 md:text-2xl text-xl">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    data-aos="zoom-in-up"
                    className="flex-1 flex items-center justify-center"
                >
                    <Image src={course.HeighletsImage} height={600} className=" p-5" width="600" alt="" />
                </div>
            </div>
            {/* WHAT YOU'LL LEARN */}
            <div className="flex py-8 gap-5 md:flex-row flex-col-reverse justify-center items-center h-full bg-[#001321]">
                <div
                    data-aos="fade-left"
                    className="flex justify-center md:w-[60%] w-full"
                >
                    <Image src={course.WULImage} width={700} alt="" height={500} />
                </div>
                <div
                    data-aos="fade-right"
                    className="flex flex-1 flex-col gap-10 justify-center "
                    style={{ color: "white" }}
                >
                    <h1 className="md:text-5xl text-3xl text-center">
                        WHAT YOU'LL LEARN HERE
                    </h1>
                    <ul className=" items-start md:text-3xl text-xl">
                        {course?.whatULearn?.map((learn, index) => (
                            <li className="mt-1 flex items-center gap-2" key={index}>
                                <ArrowRightIcon />
                                {learn}
                            </li>
                        ))}
                    </ul>
                    <div className="mx-auto">
                        <Button
                            className="btn"
                            onClick={() => router("/contact")}
                            value={"Explore Now"}
                        />
                    </div>
                </div>
            </div>

            {/* Vertical Caorousel */}
            <div className=" p-4 flex flex-col md:flex-row h-[100vh] md:h-[60vh] justify-center items-center">
                <div
                    data-aos="flip-up"
                    className="flex-1 items-center flex justify-end flex-col"
                >
                    <h1 className="md:text-5xl font-poppins text-2xl">
                        TOOLS & SOFTWARE
                    </h1>
                    <VerticalCarousel />
                </div>
                <div
                    data-aos="flip-down"
                    className="flex-1 items-center flex gap-2 justify-center flex-col font-poppins"
                >
                    <h1 className="md:text-5xl font-poppins text-2xl">CERTIFICATIONS</h1>
                    <Image
                        src="/course/certificate-medal.webp"
                        width={209}
                        height={200}
                        alt="Certifiacte image from Harikrushnamultimedia.com"
                    />
                    <p className="text-lg md:text-2xl text-center">
                        Harikrushna Multimedia Certified Expert in 3D Animation
                    </p>
                </div>
            </div>

            {/* critera */}

            <div className="grid md:grid-cols-3 px-8 justify-center md:flex-row flex-col md:gap-1 gap-14 items-start my-20">
                {/* <!-- ELIGIBILITY CRITERIA --> */}
                <div
                    data-aos="flip-left"
                    className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
                >
                    <h1 className="text-3xl text-center font-poppins">
                        ELIGIBILITY CRITERIA
                    </h1>
                    <Image
                        className="h-[14rem] transition-transform transform duration-500 hover:scale-110"
                        width={400}
                        height={400}
                        src="/course/eligibility.webp"
                        alt=""
                    />
                    <p className="w-full md:w-[60%] text-md md:text-xl text-center">
                        Graduates and undergraduates are welcome to apply after successfully
                        completing their 10 + 2 education.
                    </p>
                </div>

                {/* <!-- COURSE DURATION --> */}
                <div
                    data-aos="flip-right"
                    className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
                >
                    <h1 className="text-3xl text-center font-poppins ">
                        COURSE DURATION
                    </h1>
                    <Image
                        className="h-[14rem] transition-transform duration-500 transform hover:scale-110"
                        width={400}
                        height={400}
                        src="/course/course-duration.webp"
                        alt=""
                    />
                    <p className="w-full md:w-[60%] text-md md:text-xl text-center">
                        Experience a 12-months program with 2 hours of daily classes for 6
                        days a week, providing practical assignments.
                    </p>
                </div>

                {/* <!-- PLACEMENT GUARANTEE --> */}
                <div
                    data-aos="flip-left"
                    className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
                >
                    <h1 className="text-3xl text-center font-poppins">
                        PLACEMENT GUARANTEE
                    </h1>
                    <Image
                        className="h-[14rem] transition-transform transform  duration-500 hover:scale-110"
                        width={400}
                        height={400}
                        src="/course/placement-guarantee.webp"
                        alt=""
                    />
                    <p className="w-full md:w-[60%] text-md md:text-xl text-center">
                        Secure your future with our Placement Guarantee, connecting you with
                        industry leaders for exciting career opportunities after program.
                    </p>
                </div>
            </div>
            {/* Contact Form */}
            <div className="flex justify-center ">
                <ContactForm />
            </div>
            {/* SIMILAR COURSE  */}
            <FAQSection />
        </div>
    );
}

export default page