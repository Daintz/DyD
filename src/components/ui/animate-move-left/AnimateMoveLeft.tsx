"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageProps {
  key: string;
  src: string;
  alt: string;
}

interface Props {
  images: ImageProps[];
}

export const AnimateMoveLeft = ({ images }: Props) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const allImages = [...images, ...images, ...images];

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animation = "none";
      void marqueeRef.current.offsetWidth;
      marqueeRef.current.style.animation = "";
    }
  }, [images]);

  return (
    <div className="relative overflow-hidden w-full py-6 group">
      <div
        ref={marqueeRef}
        className="flex animate-marquee gap-6 w-max group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: "20s",
        }}
      >
        {allImages.map((item, idx) => (
          <Image
            key={`${item.key}-${idx}`}
            src={item.src}
            alt={item.alt}
            width={100}
            height={100}
            className="w-[120px] h-[120px] object-contain flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};
