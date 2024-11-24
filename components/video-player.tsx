"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoId: string;
  start: number;
  end: number;
  isActive: boolean;
}

export default function VideoPlayer({
  videoId,
  start,
  end,
  isActive,
}: VideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isActive && iframeRef.current) {
      // Reload iframe when becoming active to ensure proper playback
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = currentSrc;
    }
  }, [isActive]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=${start}&end=${end}&controls=0&modestbranding=1&rel=0&enablejsapi=1&loop=1&playlist=${videoId}`;

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        className="absolute w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
