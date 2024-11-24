"use client";

interface VideoPlayerProps {
  videoId: string;
  type: "youtube" | "instagram";
  start?: number;
  end?: number;
}

export default function VideoPlayer({
  videoId,
  type,
  start = 0,
  end = 0,
}: VideoPlayerProps) {
  if (type === "instagram") {
    console.log("instagram");
    console.log(`https://www.instagram.com/reel/${videoId}/embed/`);

    return (
      <div className="aspect-[9/16] w-full max-w-[540px] mx-auto">
        <iframe
          src={`https://www.instagram.com/reel/${videoId}/embed/`}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    );
  }

  // YouTube 플레이어
  const baseUrl = `https://www.youtube.com/embed/${videoId}`;
  const params = new URLSearchParams({
    autoplay: "0",
    mute: "0",
    start: start.toString(),
    controls: "0",
    modestbranding: "1",
    rel: "0",
    enablejsapi: "1",
  });

  if (end !== 0) {
    params.append("end", end.toString());
  }

  const embedUrl = `${baseUrl}?${params.toString()}`;

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
