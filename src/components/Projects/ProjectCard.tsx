import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Overlay from "../Overlay";

interface ProjectCardProps {
  title: string;
  description: string;
  youtubeIframe: string;
  youtubeThumbnail: string;
  youtubeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  youtubeIframe,
  youtubeThumbnail,
  youtubeUrl,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleCardClick = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      {/* Clickable Card */}
      <div
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
        className="max-w-[517px] relative z-[60]"
      >
        <div className="bg-gray-900 rounded-xl p-8 card-hover">
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="bg-gray-800 rounded-lg p-1 mb-6 aspect-video w-full">
            <img
              src={youtubeThumbnail}
              alt={`${title} thumbnail`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
            onClick={(e) => e.stopPropagation()} // Prevent reopening modal
          >
            View Externally
            <ArrowRight width={20} />
          </a>
        </div>
      </div>

      {/* Overlay Modal (outside the clickable card) */}
      <Overlay
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
        youtubeIframe={youtubeIframe}
      />
    </>
  );
};

export default ProjectCard;

// /home/softtouch/.local/share/icons/cursor.png
