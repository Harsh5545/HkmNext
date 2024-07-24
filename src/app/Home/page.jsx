import Hero from "./Hero";
import HomeMiddle from "./HomeMiddle";
import HomeAbout from "./HomeAbout";
import HomeExplore from "./HomeExplore";
import HomeReview from "./HomeReview";

export const metadata = {
  title: "Harikrushna Multimedia Institute | Surat's Premier Multimedia School",
  description: "Welcome to Harikrushna Multimedia Institute, Surat's leading destination for creative education in 3D Architectural Design, Video Editing, Game Design, Animation, and Visual Effects.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    '3D Architectural Design',
    'Harikrushna Multimedia Institute',
    'Video Editing',
    'Game Design',
    '3D Animation',
    'Visual Effects',
    '2D Animation',
    '3D Jewellery Design',
    'Graphics Design'
  ],
  openGraph: {
    title: "Harikrushna Multimedia Institute | Leading Creative Courses in Surat",
    description: "Discover the Harikrushna Multimedia Institute, where creativity meets technology. Located in Surat, Gujarat, we offer comprehensive courses in 3D design, animation, and multimedia. Explore our students' work and join us to unlock your creative potential.",
    images: ["/logo.png"],
    url: "https://www.harikrushnamultimedia.com",
type: "website",

    site_name: "Harikrushna Multimedia Institute"
  },
 twitter: {
        card: 'summary_large_image',
        title: "Hari Krushna Multimedia",
        description: "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
        images: [],
}

};



function Home() {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${"/assets/vfx.webp"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    opacity: 0.89,
  };

  return (
    <>

      <div style={containerStyle}>
        <div style={bgOverlayStyle}></div>
        <Hero />
      </div>
      <HomeMiddle />
      <HomeAbout />
      <HomeExplore />
      <HomeReview />
    </>
  );
}

export default Home;
