import React from "react";
import Aurora from "../utils/Aurora";

const About: React.FC = () => {
  return (
    <div className="py-[8rem] relative overflow-hidden bg-purple-500">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#1a1a2e", "#16213e", "#0f3460"]}
          amplitude={0.8}
          blend={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[8rem]">
        <div>
          <h2 className="text-[2rem] font-bold text-center text-white">
            About Me
          </h2>
        </div>
        <div className="flex items-center justify-center mt-12">
          <div className="w-1/2 text-[1.5rem] font-medium text-white">
            I'm Emmanuel Adewuyi, a skilled video editor with a passion for
            helping creators, businesses, and brands bring their ideas to life.
            On this portfolio website, I share expert video editing tutorials,
            AI-powered content creation tips, and behind-the-scenes insights to
            make your workflow smoother and more efficient.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
