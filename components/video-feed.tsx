"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./video-player";
import { Card } from "@/components/ui/card";

interface Video {
  platform: string;
  url: string;
  id: string;
  start: number;
  end: number;
  from: string;
  learn: string;
}

export default function VideoFeed() {
  // Sample video data
  const videos: Video[] = [
    {
      platform: "youtube",
      url: "https://www.youtube.com/shorts/3blVkn4qHMU",
      id: "3blVkn4qHMU",
      start: 0,
      end: 0,
      from: "the.great.secret",
      learn: "나의 목표를 작게 쪼갠다.",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/shorts/ATWq8YaWLTI",
      id: "ATWq8YaWLTI",
      start: 0,
      end: 0,
      from: "the.great.secret",
      learn: "성과와 성공을 구분한다.",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/reel/DB0qheLKwSE",
      id: "DB0qheLKwSE",
      start: 0,
      end: 0,
      from: "the.great.secret",
      learn: "반경을 넓혀야 한다. 나의 passion을 찾는다.",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/reel/DBgEfFtKcKX",
      id: "DBgEfFtKcKX",
      start: 0,
      end: 0,
      from: "the.great.secret",
      learn:
        "나를 가장 크게 지배하는 마인드셋을 바꾼다. 1. 과정이 아름다우면 됐다. 2. 지금 나에게 돈은 필요하지 않다. 나에게 투자하는 것이 더 중요하다. 그런 마인드셋을 우선 바꿔야만 결과가 나올 것이다. 최선을 다했다고 말할 수 있게 된다.",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=uC83aS7ZnGA",
      id: "uC83aS7ZnGA",
      start: 551,
      end: 616,
      from: "@TEO_universe",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/shorts/A0EF8XzBz_8",
      id: "A0EF8XzBz_8",
      start: 0,
      end: 30,
      from: "@yozmsa",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 2872,
      end: 3068,
      from: "@yozmsa",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 3105,
      end: 3265,
      from: "@yozmsa",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=nr2twoNDPjA",
      id: "nr2twoNDPjA",
      start: 3267,
      end: 3438,
      from: "@yozmsa",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2156,
      end: 2186,
      from: "@동기부여학과",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2156,
      end: 2186,
      from: "@동기부여학과",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2434,
      end: 2450,
      from: "@동기부여학과",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 2655,
      end: 2729,
      from: "@동기부여학과",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=T6qqQydZFvE",
      id: "T6qqQydZFvE",
      start: 4005,
      end: 4089,
      from: "@동기부여학과",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=nCqWXf9kTsY",
      id: "nCqWXf9kTsY",
      start: 365,
      end: 387,
      from: "@channel.talk",
      learn: "learn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=SXgwni1kFuY",
      id: "SXgwni1kFuY",
      start: 1004,
      end: 1188,
      from: "@MagazineB",
      learn: "learn",
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
                type={video.platform as "instagram" | "youtube"}
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
