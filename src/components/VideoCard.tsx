import { Card } from "./ui/card";
import { Play } from "lucide-react";

export default function VideoCard({
  project,
  handleClick,
}: {
  project: { id: number; title: string; genre: string; image: string };
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
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-sm">
              <Play></Play>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white/90">
            {project.title}
          </h3>
          <span className="text-blue-400 text-sm font-medium">
            {project.genre}
          </span>
        </div>
        <p className="text-white/60 text-sm">
          Professional color grading and post-production work showcasing
          cinematic visual storytelling techniques.
        </p>
      </div>
    </Card>
  );
}
