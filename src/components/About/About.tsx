import React from "react";
import Aurora from "../utils/Aurora";
import Button from "../UI/Button";

const About: React.FC = () => {
  return (
    <div className="py-[8rem] relative overflow-hidden bg-[#211F2E] -z-10">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#211F2E", "#8b5cf6", "#ec4899"]}
          amplitude={0.8}
          blend={0.6}
        />
        {/* Neon gradient overlay for glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-blue-500/40 blur-2xl opacity-80 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white/5 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-[8rem] p-10 md:p-16">
          {/* Left: Glowing Profile Image */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group mb-8">
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/60 via-pink-500/40 to-blue-500/60 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-white/10">
                <span className="text-6xl font-extrabold text-white drop-shadow-[0_2px_32px_rgba(139,92,246,0.7)]">
                  EA
                </span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-primary text-2xl font-bold mb-2 drop-shadow-[0_2px_16px_rgba(139,92,246,0.7)]">
                Get to Know Me
              </h2>
              <h3 className="text-4xl font-bold text-white mb-4">
                About Emmanuel Adewuyi
              </h3>
              <h4 className="text-xl font-semibold text-white mb-2">
                Visual Storytelling Expert
              </h4>
            </div>
          </div>
          {/* Right: Content & Stats */}
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Emmanuel Adewuyi, a skilled video editor with a passion for
                helping creators, businesses, and brands bring their ideas to
                life. With years of experience in the industry, I specialize in
                creating cinematic, polished videos that captivate and connect.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                On this portfolio website, I share expert video editing
                tutorials, AI-powered content creation tips, and
                behind-the-scenes insights to make your workflow smoother and
                more efficient.
              </p>
            </div>
            {/* Skills/Stats */}
            <div className="flex gap-6">
              <div className="flex-1 bg-white/10 rounded-2xl p-8 border border-white/10 text-center shadow-lg">
                <div className="text-4xl font-extrabold text-primary mb-2">
                  500+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="flex-1 bg-white/10 rounded-2xl p-8 border border-white/10 text-center shadow-lg">
                <div className="text-4xl font-extrabold text-secondary mb-2">
                  5+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className=" text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                View My Work
              </button>
              <Button link="#">Download CV</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
