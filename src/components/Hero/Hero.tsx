import Nav from "./Nav";
import bgImage from "../../assets/images/bg.jpg";
import CurvedCarousel from "../Carousel3d";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Nav />
      <CurvedCarousel />
    </div>
  );
}

export default Hero;