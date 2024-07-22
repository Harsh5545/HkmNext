import React from "react";
import AboutHero from "./AboutHero";
import AboutMiddle from "./AboutMiddle";

export const metadata = {
  title: "About",
  description: "About description",
  alternates: {
    canonical: "/about",
  },
  keywords: `'3D Architectural Design','Harikrushna Multimedia Institue', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design' `,
  openGraph: {
    title: "HKM - About",
    description:
      "Welcome to Harikrushna Multimedia Institute, located in Surat, Gujarat. We take pride in offering a diverse range of creative courses that empower aspiring individuals in the fields of multimedia, animation, and design.",
    keywords: `'3D Architectural Design', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design'`,
    images: ["/logo.png", ],
  },
};

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutMiddle />
    </div>
  );
};

export default page;
