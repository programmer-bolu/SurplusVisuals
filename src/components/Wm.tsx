import React from "react";
import { HeartHandshake } from "lucide-react";

const Boluwatife: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://boluwatife.tech"
        className="bg-[#d1d1d1] text-[#0b142b] px-3 py-2 rounded-[0.5rem] cursor-pointer font-medium flex items-center justify-between gap-2"
      >
        <span>Built with </span>
        <HeartHandshake></HeartHandshake>
      </a>
    </div>
  );
};

export default Boluwatife;
