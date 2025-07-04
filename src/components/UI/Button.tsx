import { type ReactNode } from "react";

function Button({ children, link, className }: { children: ReactNode; link: string; className?: string }) {
  return (
    <a
      href={link}
      className={`inline-flex gap-[0.5rem] px-8 py-2.5 rounded-full text-white font-medium transition-all duration-300 border border-white/10 hover:scale-105 hover:bg-white/10 ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

export default Button;
