import React from "react";
import AboutHero from "./AboutHero";
import AboutMiddle from "./AboutMiddle";
// import FAQSection from "@/components/Faq/Faq";

export const metadata = {
  title: "About",
  description: "About description",
  alternates: {
    canonical: "/about",
  },
  robots: "index, follow, cache, archive",
  keywords: `'3D Architectural Design','Harikrushna Multimedia Institue', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design' `,
  openGraph: {
    title: "HKM - About",
    description:
      "Welcome to Harikrushna Multimedia Institute, located in Surat, Gujarat. We take pride in offering a diverse range of creative courses that empower aspiring individuals in the fields of multimedia, animation, and design.",
    keywords: `'3D Architectural Design', 'Video Editing', 'Game Design' , '3D Animation', 'Visual Effects', '2D Animation', '3D Jewellery Design', 'Graphics Design'`,
    images: ["/logo.png",],
    url: "https://www.harikrushnamultimedia.com/about",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hari Krushna Multimedia",
    description: "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
    images: [],
  }
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
