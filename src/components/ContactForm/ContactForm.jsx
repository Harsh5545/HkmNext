"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import Image from "next/image";

function ContactForm() {
  const sampleCourseNames = [
    "Game Design",
    "2D Animation",
    "3D Animation",
    "Graphic Desgin",
    "Video Editing",
    "3D ARCHITECTURAL",
    "3D JEWELLERY DESIGN",
    "Visual Effect",
    "PROGRAM IN GRAPHICS & ANIMATION",
    "PROGRAM IN GAME DESIGN",
  ];

  const [course, setCourse] = useState("");
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const form = useRef();
  const [message, setMessage] = useState("");

  // Move the sendEmail function inside the component
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_0krafbr";
    const templateId = "template_61p6zpj";
    const publicKey = "e8m4_SZqHq0uAAXvA";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setMessage("Message sent successfully!");
      },
      (error) => {
        setMessage("Error sending message. Please try again.");
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
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:flex-1 flex justify-evenly flex-col rounded-xl ">
          <h3 className="text-white p-5 text-5xl text-center font-bold ">
            Contact us
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-white flex flex-col items-center"
          >
            <div className="mb-4 w-full md:w-[60%]">
              <input
                name="user_name"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[60%]">
              <input
                name="user_email"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[60%]">
              <input
                type="tel"
                className="form-control shadow-none w-full p-3 rounded-3xl"
                name="user_phone"
                placeholder="Number"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[60%]">
              <select
                value={course}
                name="message"
                onChange={handleCourseChange}
                className="form-control-contact w-full p-3 rounded-3xl"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {sampleCourseNames.map((courseName, index) => (
                  <option
                    key={index}
                    className="bg-white text-black"
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
              >
                SEND
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="md:flex-1 flex justify-center flex-col gap-10 items-center text-white py-3 px-4">
          <h2 className="h2 text-center md:text-3xl text-2xl font-bold">
            WE'D LOVE TO HEAR FROM YOU
          </h2>
          <p className="text-justify">
            Fill the form so we can get to know you and your needs better.{" "}
          </p>
          {/* Ensure that Contact is imported */}
          <Image
            src="/course/ContactUs.webp"
            width={400}
            height={300}
            alt="contact image of harikrushna Multimedia institute"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
