import Hero from "./Hero";
import HomeMiddle from "./HomeMiddle";
import HomeAbout from "./HomeAbout";
import HomeExplore from "./HomeExplore";
import HomeReview from "./HomeReview";

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
