"use client"
import React from "react";
import "./homeStyles.css";
import Button from "../../components/Button/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HomeExplore() {
    const router = useRouter();
    return (
        <div className="grid mt-10 md:grid-cols-2 overflow-hidden grid-cols-1 pb-[5rem]">
            <div className="">
                <Image src="/course/HomeExplore1.webp" width={800}
                    height={500}
                    className="h-[40vh] p-2  md:h-[80vh]"

                    alt=" Harikrushna multimedia Institue is No 1 classes in surat" />

            </div>
            <div className="flex p-2 justify-center flex-col">
                <h4 className="text-3xl">EXPLORE THE CREATION OF</h4>
                <span className="text-4xl font-bold mb-5">EXISTING OPPORTUNITIES</span>
                <p className="text-lg mb-5">
                    Enjoy each step along the way that takes you into the unknown space.
                    Let go and allow your imagination to become alive
                </p>
                <ul className="text-lg flex gap-4 flex-col mb-8">
                    <li>
                        <KeyboardDoubleArrowRightIcon />
                        Visualization
                    </li>
                    <li>
                        <KeyboardDoubleArrowRightIcon />
                        Pre-Production
                    </li>
                    <li>
                        <KeyboardDoubleArrowRightIcon />
                        Production
                    </li>
                    <li>
                        <KeyboardDoubleArrowRightIcon />
                        Post-Preduction
                    </li>
                </ul>
                <Button
                    className="btn"
                    onClick={() => router.push('/contact')}
                    value={"Book A Free Demo Class"}
                />
                <div className="grid grid-cols-2 ">
                    <div className="tooltip-container">
                        <Image src='/course/Teach.webp'
                            className="rounded-full  hover:p-5"
                            width={100} height={100}
                            alt=""


                        />
                        <div className="tooltip">
                            <h5 className="text-2xl">PROFESSIONAL MASTERS</h5>
                            <p className="text-lg">

                                Masters help Imagineers to bring their imagination to life.
                                Making the course more simpler to understand.
                            </p>
                        </div>
                    </div>
                    <div className="tooltip-container">

                        <Image
                            src='/course/Skill.webp'
                            className="rounded-full hover:p-5  "
                            width={100}
                            height={100}
                            alt=""
                        />
                        <div className="tooltip">
                            <h6 className="text-2xl">SKILL BASED COACHING</h6>
                            <p className="text-lg">
                                Skill-based training will benefit you in ways beyond your
                                imagination & opportunity to discover a hidden talent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeExplore;
