"use client";

import React from "react";
import Image from "next/image";

const BulkOrderHero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-20 h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 pt-28">
        {/* Left Content - Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/bulk-primary.png"
            alt="Bulk order boxes with ORDER BULK text"
            width={552}
            height={552}
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[490px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-md">
            Partner with us –<br />
            bring timeless
            <br />
            wisdom into your
            <br />
            <span className="whitespace-nowrap">classroom or store!</span>
          </h1>
          <p className="text-white mt-6 text-base lg:text-lg drop-shadow-sm opacity-90">
            Perfect for retail, gifting, or classroom use – special pricing
            available for bulk buyers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderHero;
