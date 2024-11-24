"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./video-player";

interface Video {
  url: string;
  id: string;
  start: number;
  end: number;
}

export default function VideoFeed() {
  // Sample video data
  const videos: Video[] = [
    {
      url: "https://www.youtube.com/watch?v=jfMQKcfF9dw",
      id: "jfMQKcfF9dw",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=31FB2VLnljY",
      id: "31FB2VLnljY",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=arXgT3NvvLk",
      id: "arXgT3NvvLk",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=umm4OED6bY0",
      id: "umm4OED6bY0",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=5VPHfHraH2k",
      id: "5VPHfHraH2k",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=9CrSNzt8DBg",
      id: "9CrSNzt8DBg",
      start: 30,
      end: 33,
    },
    {
      url: "https://www.youtube.com/watch?v=7ghlUdxi3ak",
      id: "7ghlUdxi3ak",
      start: 30,
      end: 33,
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoIndex = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          setCurrentVideoIndex(videoIndex);
        }
      });
    }, options);

    const videoElements = document.querySelectorAll(".video-container");
    videoElements.forEach((element) => observer.observe(element));

    return () => {
      videoElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="video-container h-screen w-full snap-start snap-always"
          data-index={index}
        >
          <VideoPlayer
            videoId={video.id}
            start={video.start}
            end={video.end}
            isActive={currentVideoIndex === index}
          />
        </div>
      ))}
    </div>
  );
}
