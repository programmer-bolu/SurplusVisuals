import React from "react";
import { BotIcon } from "lucide-react";

const Boluwatife: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://boluwatife.tech"
        className="bg-white text-black px-3 py-2 rounded-[0.75rem] cursor-pointer font-medium flex items-center justify-between gap-2"
      >
        <BotIcon></BotIcon>
        <span>Built By Boluwatife</span>
      </a>
    </div>
  );
};

export default Boluwatife;
