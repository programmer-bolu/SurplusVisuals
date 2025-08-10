import React, { useState, useRef, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface VideoOverlayProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ videoUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const backgroundVideo = backgroundVideoRef.current;
    if (!video || !backgroundVideo) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(video.duration);
      setVideoDimensions({
        width: video.videoWidth,
        height: video.videoHeight,
      });
    };

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleError = () => {
      setIsLoading(false);
      setError(true);
    };
    const handlePlay = () => {
      setIsPlaying(true);
      backgroundVideo.play().catch(() => {});
    };
    const handlePause = () => {
      setIsPlaying(false);
      backgroundVideo.pause();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    backgroundVideo.addEventListener("loadeddata", () => {
      backgroundVideo.currentTime = video.currentTime;
    });

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("error", handleError);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    isPlaying ? video.pause() : video.play();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressChange = (value: number[]) => {
    const video = videoRef.current;
    const backgroundVideo = backgroundVideoRef.current;
    if (!video) return;

    const newTime = (value[0] / 100) * duration;
    video.currentTime = newTime;
    if (backgroundVideo) {
      backgroundVideo.currentTime = newTime;
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const handleVideoClick = () => {
    togglePlayPause();
    showControlsTemporarily();
  };

  const handleMouseMove = () => showControlsTemporarily();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-white text-center px-4">
          <div className="text-lg sm:text-xl mb-2">Error loading video</div>
          <div className="text-gray-400 text-sm sm:text-base">
            Unable to play this video
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Background blurred video */}
      <video
        ref={backgroundVideoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-50"
        muted
        loop
      />

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-white" />
        </div>
      )}

      {/* Main video */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        onMouseMove={handleMouseMove}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          width={videoDimensions.width}
          height={videoDimensions.height}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          className="cursor-pointer"
          onClick={handleVideoClick}
          playsInline
        />

        {/* Overlay controls */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Close button */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Center play/pause */}
          {!isLoading && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Button
                variant="secondary"
                size="icon"
                onClick={togglePlayPause}
                className="pointer-events-auto rounded-full bg-black/50 text-white hover:bg-black/70 w-12 h-12 sm:w-16 sm:h-16"
              >
                {isPlaying ? (
                  <Pause size={24} className="sm:w-8 sm:h-8" />
                ) : (
                  <Play size={24} className="sm:w-8 sm:h-8" />
                )}
              </Button>
            </div>
          )}

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Play/Pause */}
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlayPause}
                disabled={isLoading}
                className="text-white"
              >
                {isPlaying ? (
                  <Pause size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Play size={16} className="sm:w-5 sm:h-5" />
                )}
              </Button>

              {/* Time + Progress */}
              <span className="text-white text-xs sm:text-sm min-w-[30px] sm:min-w-[35px]">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[duration ? (currentTime / duration) * 100 : 0]}
                max={100}
                step={0.1}
                onValueChange={handleProgressChange}
                className="flex-1"
              />
              <span className="text-white text-xs sm:text-sm min-w-[30px] sm:min-w-[35px]">
                {formatTime(duration)}
              </span>

              {/* Volume */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-white"
              >
                {isMuted ? (
                  <VolumeX size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Volume2 size={16} className="sm:w-5 sm:h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
