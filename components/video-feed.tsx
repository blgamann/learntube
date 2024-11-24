"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./video-player";
import { Card } from "@/components/ui/card";

interface Video {
  url: string;
  id: string;
  start: number;
  end: number;
  from: string;
}

export default function VideoFeed() {
  // Sample video data
  const videos: Video[] = [
    {
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 2872,
      end: 3068,
      from: "@yozmsa",
    },
    {
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 3105,
      end: 3265,
      from: "@yozmsa",
    },
    {
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 3267,
      end: 3438,
      from: "@yozmsa",
    },
    {
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2156,
      end: 2186,
      from: "@동기부여학과",
    },
    {
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2156,
      end: 2186,
      from: "@동기부여학과",
    },
    {
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2434,
      end: 2450,
      from: "@동기부여학과",
    },
    {
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2655,
      end: 2729,
      from: "@동기부여학과",
    },
    {
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 4005,
      end: 4089,
      from: "@동기부여학과",
    },
    {
      url: "https://www.youtube.com/watch?v=nCqWXf9kTsY",
      id: "nCqWXf9kTsY",
      start: 365,
      end: 387,
      from: "@channel.talk",
    },
    {
      url: "https://www.youtube.com/watch?v=SXgwni1kFuY",
      id: "SXgwni1kFuY",
      start: 1004,
      end: 1188,
      from: "@MagazineB",
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
          <Card className="flex justify-center items-center h-full">
            {currentVideoIndex === index && (
              <VideoPlayer
                videoId={video.id}
                start={video.start}
                end={video.end}
              />
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
