// ContactForm.js
"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import Image from "next/image";
// import Loader from "../Loader/Loader1"; // Import the Loader component

function ContactForm() {
  const sampleCourseNames = [
    "Game Design",
    "2D Animation",
    "3D Animation",
    "Graphic Design",
    "Video Editing",
    "3D ARCHITECTURAL",
    "3D JEWELLERY DESIGN",
    "Visual Effect",
    "PROGRAM IN GRAPHICS & ANIMATION",
    "PROGRAM IN GAME DESIGN",
  ];

  const [course, setCourse] = useState("");
  const [name, setName] = useState(""); // State for user's name
  const [message, setMessage] = useState(""); // Success message state
//   const [isLoading, setIsLoading] = useState(false); // Loading state
  const form = useRef();

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // setIsLoading(true); // Start loading.

    const serviceId = "service_0krafbr";
    const templateId = "template_61p6zpj";
    const publicKey = "e8m4_SZqHq0uAAXvA";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setMessage(
          `Thank you ${name} for reaching out to Harikrushna Multimedia Classes.\n\nOur team will review your information, and we will get back to you as soon as possible.`
        );
        form.current.reset(); // Clear all input fields
        setCourse(""); // Clear course selection
        setName(""); // Clear name input
        // setIsLoading(false); // Stop loading
      },
      (error) => {
        setMessage("Error sending message. Please try again.");
        // setIsLoading(false); // Stop loading
      }
    );
  };

  return (
    <div
      className="mt-2 w-full"
      style={{
        background:
          "linear-gradient(to right, #353777 0%, #3b5998 50%, #0F406D 100%)",
      }}
    >
       {/* Show loader when loading */}

      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:flex-1 flex justify-evenly flex-col rounded-xl">
          <span className="text-white p-5 text-5xl text-center font-bold">
            Contact us
          </span>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-white flex flex-col items-center"
          >
            <div className="mb-4  w-[80%] text-black md:w-[60%]">
              <input
                name="user_name"
                className="form-control outline-none shadow-none w-full p-3 rounded-3xl"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4 outline-none text-black w-[80%] md:w-[60%]">
              <input
                name="user_email"
                className="form-control outline-none shadow-none w-full p-3 rounded-3xl"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4 outline-none text-black w-[80%] md:w-[60%]">
              <input
                type="tel"
                className="form-control outline-none shadow-none w-full p-3 rounded-3xl"
                name="user_phone"
                placeholder="Number"
                required
              />
            </div>
            <div className="mb-4 text-gray-500 outline-none cursor-pointer w-[80%] md:w-[60%]">
              <select
                value={course}
                name="message"
                onChange={handleCourseChange}
                className="form-control-contact outline-none cursor-pointer w-full p-3 rounded-3xl"
              >
                <option className="text-black" value="" disabled>
                  Select a course
                </option>
                {sampleCourseNames.map((courseName, index) => (
                  <option
                    key={index}
                    className="bg-white cursor-pointer text-black"
                    value={courseName}
                  >
                    {courseName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center w-full">
              <button
                className="btn btn-primary px-3 py-2 text-lg md:w-[60%]"
                type="submit"
                // disabled={isLoading} // Disable button while loading
              >
                SEND
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </div>
          </form>
            {/* {isLoading && <Loader />} */}
          {message && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              style={{ zIndex: 999 }}
            >
              <div className="bg-white flex flex-col items-center w-full md:w-1/2 p-5 rounded-lg shadow-lg">
                <p className="text-base md:text-lg">{message}</p>
                <button
                  onClick={() => setMessage("")}
                  className="btn text-white px-3 py-2 m-2 text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="md:flex-1 flex justify-center flex-col gap-10 items-center text-white py-3 px-4">
          <span className="h2 text-center md:text-xl text-2xl font-bold">
            WE'D LOVE TO HEAR FROM YOU
          </span>
          <p className="text-justify">
            Fill the form so we can get to know you and your needs better.{" "}
          </p>
          <Image
            src="/course/ContactUs.webp"
            width={400}
            height={300}
            alt="contact image of Harikrushna Multimedia Institute"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
