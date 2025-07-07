import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";
import Squares from "../Squares/Squares";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
    {
      title: "Cinematic Wedding Highlight",
      description:
        "A beautifully edited wedding video showcasing emotional moments with smooth transitions and vibrant colors.",
      youtubeIframe:
        "https://www.youtube.com/embed/P9NsWbiE4IU?si=JURvuHD_qxwy--op",
      youtubeUrl: "https://youtu.be/P9NsWbiE4IU?si=eYOIcg3IP-BQ-Ul2",
      youtubeThumbnail:
        "https://i.ytimg.com/vi/P9NsWbiE4IU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtMzM-tXYFoYHvmukmVSIp3zsNig",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="py-[1rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#211F2E] -z-10">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#ffffff69"
          hoverFillColor="#970707"
        />
        {/* Neon gradient overlay for glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-blue-500/40 blur-2xl opacity-80 pointer-events-none" />
      </div>

      {/* Foreground content */}
      <div className="h2 px-[8rem] relative z-[70]">
        <section className="py-10 px-6">
          <div className="mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary text-xl mb-3 drop-shadow-[0_2px_16px_rgba(139,92,246,0.7)] glow-text">
                Previous Projects
              </h2>
              <h3 className="text-4xl font-bold glow-text">
                Supercharge Your Productivity
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  youtubeUrl={project.youtubeUrl}
                  key={index}
                  title={project.title}
                  description={project.description}
                  youtubeIframe={project.youtubeIframe}
                  youtubeThumbnail={project.youtubeThumbnail}
                />
              ))}
            </div>
            {visibleProjects < projects.length && (
              <div className="text-center mt-8 flex items-center justify-center">
                <button
                  onClick={loadMore}
                  className="text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-white/80 cursor-pointer flex items-center justify-between"
                >
                  Load More
                  <ChevronDown height={15} />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* Add glowing effect styles */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 16px #ec4899, 0 0 32px #8b5cf6, 0 0 8px #38bdf8;
        }
        .glow-btn {
          box-shadow: 0 0 24px 4px #ec4899aa, 0 0 48px 8px #8b5cf6aa;
        }
      `}</style>
    </div>
  );
};

export default Projects;
