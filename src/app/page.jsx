
import Hero from "./Home/Hero";
import HomeMiddle from "./Home/HomeMiddle";
import HomeAbout from "./Home/HomeAbout";
import HomeExplore from "./Home/HomeExplore";
import HomeReview from "./Home/HomeReview";
import './Home/homeStyles.css';

export default function Home() {
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
    <main>
      <div style={containerStyle}>
        <div style={bgOverlayStyle}></div>
        <Hero />
      </div>
      <HomeMiddle />
      <HomeAbout />
      <HomeExplore />
      <HomeReview/>
    </main>
  );
}
