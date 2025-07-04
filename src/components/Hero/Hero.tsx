import Nav from "./Nav";
import Silk from "../UI/Silk";
import SplitText from "../UI/SplitText";
import Button from "../UI/Button";
import { CirclePlay, Youtube, Twitch, Twitter } from "lucide-react";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden items-center flex justify-center">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Silk
          speed={6}
          scale={1}
          color="#211F2E"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      <Nav />
      <div className="relative z-20 flex items-center justify-center px-[8rem] text-center h-screen text-white w-full py-[120px]">
        <div className="relative z-20 flex flex-col items-center justify-center px-6 py-24 text-center h-screen">
          <SplitText
            text="Emmanuel Adebowale Adewuyi"
            className="text-2xl font-medium text-center mb-4"
            delay={50}
            duration={1}
            ease="elastic.out(1, 0.9)"
            splitType="chars"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl leading-tight">
            Visual Storytelling Done Right ·
            <span className="gradient-text">
              {"· Stunning Edits, Seamless Results"}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
            I help creators, brands, and storytellers craft cinematic, polished
            videos that captivate and connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button link="#">
              <span>Get in touch</span>
            </Button>
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors"
            >
              <CirclePlay></CirclePlay>
              View Projects
            </a>
          </div>
          <div className="flex items-center gap-4 mt-12">
            <div className="flex space-x-1">
              <Youtube></Youtube>
              <Twitch></Twitch>
              <Twitter></Twitter>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-300">
                Trusted by filmmakers, YouTubers, and small brands worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
