"use client";

import { useState } from "react";
import Image from "next/image";

const FlippableCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[210px] h-[310px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          flipped ? "transform rotate-y-180" : "transform"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/images/cotd-back.png"
            alt="Card back"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-4 text-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-primary text-sm font-semibold">
            You are exactly where you're meant to be. Trust the timing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
