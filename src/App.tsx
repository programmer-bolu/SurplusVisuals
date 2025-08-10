import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ContactForm from "@/components/ContactForm";

import Project1 from "@/assets/thumbnails/emmanueladewuyi.png";
import Project2 from "@/assets/thumbnails/emmanueladewuyi2.png";
import Project3 from "@/assets/thumbnails/emmanueladewuyi3.png";
import Project4 from "@/assets/thumbnails/emmanueladewuyi4.png";
import Project5 from "@/assets/thumbnails/emmanueladewuyi5.png";
import Project6 from "@/assets/thumbnails/emmanueladewuyi6.png";

import ProjectVideo from "@/assets/videos/29 Get Rich like Tate 3.mp4";
import ProjectVideo1 from "@/assets/videos/AD creative.mp4";
import ProjectVideo2 from "@/assets/videos/America is the land of opportunities.mp4";
import ProjectVideo3 from "@/assets/videos/Community AD .mp4";
import ProjectVideo4 from "@/assets/videos/Don_t focus on Macro Goals - Stop motion edit.mp4";
import ProjectVideo5 from "@/assets/videos/Intro for Long Form.mp4";

import Color1 from "@/assets/thumbnails/colorgrading01.png";
import Color2 from "@/assets/thumbnails/colorgrading02.png";

import Chroma2 from "@/assets/thumbnails/chroma01.png";
import Chroma1 from "@/assets/thumbnails/chroma02.png";

import VideoCard from "./components/VideoCard";
import VideoOverlay from "./components/VideoPlayer";
import {
  ChevronRight,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  VideoIcon,
  Menu,
} from "lucide-react";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Youtube Short",
      genre: "Shorts",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project1,
      videoUrl: ProjectVideo,
    },
    {
      id: 2,
      title: "Ad's",
      genre: "Commercial",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project2,
      videoUrl: ProjectVideo1,
    },
    {
      id: 3,
      title: "Live Interview",
      genre: "Live Interview",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project3,
      videoUrl: ProjectVideo2,
    },
    {
      id: 4,
      title: "Trending Commercial",
      genre: "Commercial",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project4,
      videoUrl: ProjectVideo3,
    },
    {
      id: 5,
      title: "YouTube Intro",
      genre: "Content Creation",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project5,
      videoUrl: ProjectVideo4,
    },
    {
      id: 6,
      title: "Youtube Intro",
      genre: "Content Creation",
      description:
        "High-impact animated intro designed for long-form video content, featuring dynamic motion graphics, smooth transitions, and professional branding for an engaging first impression.",
      image: Project6,
      videoUrl: ProjectVideo5,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Small Business Owner",
      text: "He transformed our boring product demos into something that actually gets people excited. He took our raw iPhone footage and somehow made it look like a million-dollar commercial. Our conversion rate jumped 40% after we started using his videos on our landing page. Worth every penny!.",
    },
    {
      name: "David Rodriguez",
      company: "YouTuber (1.5M subscribers)",
      text: "I was drowning trying to edit everything myself. Emmanuel came in and not only saved me 15 hours a week, but my videos actually look way better now. The color grading alone made such a huge difference - my subscribers keep commenting on how professional everything looks. Finally found someone who gets my style!",
    },
    {
      name: "Jennifer Walsh",
      company: "Wedding Photographer",
      text: "Surplus created the most beautiful wedding highlight reel for my clients. He somehow captured all the emotion and made a 10-minute video that had everyone crying happy tears. The couple said it was better than they ever imagined. I now recommend him to every bride who asks about videography.",
    },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-6">
        <nav className="backdrop-blur-lg bg-white/5 rounded-full px-4 sm:px-8 py-3 sm:py-4 mx-auto max-w-6xl border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="Surplus Visuals"
                className="h-6 sm:h-8 w-auto object-contain"
              />
              <span className="text-white text-sm sm:text-lg font-semibold sm:inline">
                SurplusVisuals
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer text-sm lg:text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer text-sm lg:text-base"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer text-sm lg:text-base"
              >
                Contact
              </button>
            </div>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0 cursor-pointer p-2"
            >
              <Menu className="w-5 h-5"></Menu>
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 backdrop-blur-lg bg-black/30 rounded-2xl p-4 sm:p-6 mx-auto max-w-sm border border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left cursor-pointer text-sm sm:text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left cursor-pointer text-sm sm:text-base"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left cursor-pointer text-sm sm:text-base"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/40 backdrop-blur-sm z-0"></div>

        {/* Animated Background Elements */}
        <div className="hidden sm:block absolute inset-0 z-5">
          <div className="absolute top-16 sm:top-20 left-12 sm:left-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-32 sm:top-40 right-20 sm:right-32 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-16 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-300/50 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 rounded-full animate-ping delay-500"></div>
        </div>

        {/* Floating Badges */}
        <div className="hidden sm:block absolute inset-0 z-5 pointer-events-none">
          {/* Top Left Badge */}
          <div className="absolute top-16 sm:top-24 left-8 sm:left-12 transform -rotate-12 animate-bounce delay-300">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              ✨ 4K Quality
            </div>
          </div>

          {/* Top Right Badge */}
          <div className="absolute top-24 sm:top-32 right-12 sm:right-16 transform rotate-6 animate-bounce delay-700">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              🏆 Award Winner
            </div>
          </div>

          {/* Middle Left Badge */}
          <div className="absolute top-1/2 left-6 sm:left-8 transform -translate-y-1/2 rotate-12 animate-bounce delay-1000">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              ⚡ Fast Delivery
            </div>
          </div>

          {/* Middle Right Badge */}
          <div className="absolute top-1/3 right-8 sm:right-12 transform -rotate-6 animate-bounce delay-500">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              🎬 Cinema Grade
            </div>
          </div>

          {/* Bottom Left Badge */}
          <div className="absolute bottom-32 sm:bottom-40 left-16 sm:left-20 transform rotate-6 animate-bounce delay-1200">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              💎 Premium Effects
            </div>
          </div>

          {/* Bottom Right Badge */}
          <div className="absolute bottom-24 sm:bottom-32 right-20 sm:right-24 transform -rotate-12 animate-bounce delay-900">
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium">
              🔥 Viral Ready
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6 text-center space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center justify-center">
          {/* Enhanced Badge */}
          <div className="group border border-white/30 bg-white/5 backdrop-blur-md text-white text-xs py-1 px-3 sm:px-4 md:px-6 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <VideoIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
            <span className="font-medium text-xs sm:text-sm">
              Professional Video Editor
            </span>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Enhanced Heading with Gradient Text */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Surplus Visuals
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Cinematic Stories, Crafted to Perfection
              </span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed px-3 sm:px-4 md:px-0">
            Transform your raw footage into captivating visual narratives that
            engage, inspire, and convert.
            <span className="text-blue-300 font-medium">
              {" "}
              Professional quality guaranteed.
            </span>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">
                500+
              </div>
              <div className="text-xs text-white/70">Projects Completed</div>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                98%
              </div>
              <div className="text-xs text-white/70">Client Satisfaction</div>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
                24hr
              </div>
              <div className="text-xs text-white/70">Average Reponse Time</div>
            </div>
          </div>

          {/* Enhanced Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-4">
            <button
              className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-1.5 sm:gap-2 justify-center text-xs sm:text-sm md:text-base"
              onClick={() => scrollToSection(portfolioRef)}
            >
              <span>View Portfolio</span>
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 sm:gap-2 justify-center text-xs sm:text-sm md:text-base"
              onClick={() => scrollToSection(contactRef)}
            >
              <span>Start Project</span>
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 sm:pt-6 md:pt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-white/60 text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></div>
              <span>Available Now</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-white/20"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span>⭐ 5.0 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-white/20"></div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span>🚀 Same-Day Response</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={portfolioRef}
        className="py-8 sm:py-12 md:py-16 lg:py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
              A curated selection of professional video editing and color
              grading work across various genres and industries.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project) =>
                VideoCard({
                  project,
                  handleClick: () => {
                    if (project.videoUrl) setSelectedVideo(project.videoUrl);
                  },
                })
              )}
            </div>
            <Button
              variant={"link"}
              className="pt-4 sm:pt-6 md:pt-8 cursor-pointer text-white"
            >
              <a
                href="https://drive.google.com/drive/folders/1aDNjNHVVobpCcId81iNVWx4XdB_-5Vs0?usp=drive_link"
                className="flex items-center font-semibold text-xs sm:text-sm md:text-base"
                target="_blank"
              >
                View Other Projects
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            </Button>
          </div>

          {/* Before & After Transformations */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                Before & After{" "}
                <span className="text-blue-400">Transformations</span>
              </h3>
            </div>

            {/* COLOR GRADING SECTION */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                <span className="text-blue-400">Color Grading</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src={Color1}
                    alt="Before Edit"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                      <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src={Color2}
                    alt="After Edit"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                      <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CHROMA KEY SECTION */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-right">
                <span className="text-blue-400">Chroma Key</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src={Chroma1}
                    alt="Before Edit"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                      <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src={Chroma2}
                    alt="After Edit"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                      <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Process */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                    Creative <span className="text-blue-400">Process</span>
                  </h3>
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                          Analysis & Planning
                        </h4>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">
                          Comprehensive footage analysis to determine the
                          optimal color grading approach and visual style.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                          Primary Correction
                        </h4>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">
                          Balancing exposure, contrast, and white balance to
                          establish a solid foundation for creative grading.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                          Creative Enhancement
                        </h4>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">
                          Applying cinematic looks, mood enhancement, and
                          stylistic choices to support the narrative.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20color%20grading%20interface%20showing%20before%20and%20after%20comparison%20with%20color%20wheels%20and%20adjustment%20panels%20in%20dark%20modern%20editing%20suite&width=600&height=338&seq=process&orientation=landscape"
                      alt="Color Grading Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Client <span className="text-blue-400">Testimonials</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-3 sm:mb-4">
                  <div className="flex text-blue-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-xs sm:text-sm"></i>
                    ))}
                  </div>
                  <p className="text-white/80 italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-12 sm:py-16 md:py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=minimalist%20dark%20studio%20setup%20with%20professional%20video%20editing%20equipment%20and%20subtle%20blue%20lighting%20creating%20atmospheric%20background%20for%20contact%20section&width=1440&height=600&seq=contactbg&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Let's Create <span className="text-blue-400">Together</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
                Let's discuss your project.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6"></Mail>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">
                      Email
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm">
                      emmanueladewuyi3@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6"></Phone>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">
                      Phone
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm">
                      +234 701 852 4281
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm">
                      +234 810 324 6538
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6"></Clock>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">
                      Response Time
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3 sm:mb-4 md:mb-0">
              <p className="text-white/60 text-xs sm:text-sm">
                © 2025 SurplusVisuals. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/surplusvisuals?igsh=MXVxd2JqNG9xcG00Mw=="
                className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <Instagram className="w-5 sm:w-6 h-5 sm:h-6"></Instagram>
              </a>

              <a
                href="https://www.youtube.com/channel/UC8fIVm2hIdEywbw9WYxPIVQ"
                className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <Youtube className="w-5 sm:w-6 h-5 sm:h-6"></Youtube>
              </a>

              <a
                href="https://web.facebook.com/emmanuel.adewuyi.915197"
                className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <Facebook className="w-5 sm:w-6 h-5 sm:h-6"></Facebook>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedVideo && (
        <VideoOverlay
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default App;
