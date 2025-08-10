import { Card } from "./ui/card";
import { Play } from "lucide-react";

export default function VideoCard({
  project,
  handleClick,
}: {
  project: {
    id: number;
    title: string;
    genre: string;
    image: string;
    description?: string;
  };
  handleClick: () => void;
}) {
  return (
    <Card
      key={project.id}
      className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 pt-0 "
      onClick={handleClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-xs sm:text-sm">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90">
            {project.title}
          </h3>
          <span className="text-blue-400 text-xs sm:text-sm font-medium">
            {project.genre}
          </span>
        </div>
        <p className="text-white/60 text-xs sm:text-sm">
          {project.description}
        </p>
      </div>
    </Card>
  );
}
