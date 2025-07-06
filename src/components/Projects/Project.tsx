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
      <div className="absolute inset-0 bg-[#211F2E]">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#ffffff69"
          hoverFillColor="#970707"
        />
      </div>

      {/* Foreground content */}
      <div className="h2 px-[8rem] relative z-[70]">
        <section className="py-10 px-6">
          <div className="mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary text-xl mb-3">Previous Projects</h2>
              <h3 className="text-4xl font-bold">
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
                  className="bg-[#211F2E] text-white py-2 px-6 rounded-lg hover:bg-secondary transition-colors border border-white/10 cursor-pointer flex items-center justify-between"
                >
                  Load More
                  <ChevronDown height={15} />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
