import React from "react";
import AboutHero from "./AboutHero";
import AboutMiddle from "./AboutMiddle";

export const metadata = {
  title: "About",
  description: "About description",
  alternates: {
    canonical: "/about",
  },
  keywords: `'Animation','3d Game Design','2d Graphics' , 'Video Editing ', `,
  openGraph: {
    title: "HKM - About",
    description:
      "Welcome to Harikrushna Multimedia Institute, located in Surat, Gujarat. We take pride in offering a diverse range of creative courses that empower aspiring individuals in the fields of multimedia, animation, and design.",
    keywords: `'Animation','3d Game Design','2d Graphics' , 'Video Editing '`,
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
