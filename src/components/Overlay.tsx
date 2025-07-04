import React, { useState, useRef, useEffect } from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeIframe: string;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, youtubeIframe }) => {
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true); // Reset loading when iframe URL changes
  }, [youtubeIframe]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >
      {/* Close Button (absolute to screen) */}
      <button
        onClick={onClose}
        className="text-white absolute top-6 right-6 text-3xl z-50"
      >
        ×
      </button>

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-gray-900 rounded-[1rem] max-w-4xl w-full overflow-hidden"
      >
        {/* Loading Spinner Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <div className="loader border-4 border-t-transparent border-white rounded-full w-12 h-12 animate-spin" />
          </div>
        )}

        <iframe
          width="100%"
          height="500"
          src={youtubeIframe}
          frameBorder="0"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="relative z-20"
        ></iframe>
      </div>
    </div>
  );
};

export default Overlay;
