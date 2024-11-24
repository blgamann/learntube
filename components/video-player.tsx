"use client";

interface VideoPlayerProps {
  videoId: string;
  start: number;
  end: number;
}

export default function VideoPlayer({ videoId, start, end }: VideoPlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&start=${start}&end=${end}&controls=0&modestbranding=1&rel=0&enablejsapi=1`;

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <iframe
        src={embedUrl}
        className="absolute w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
