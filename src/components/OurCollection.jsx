"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { COLLECTIONDATA } from "@/constants/collectionData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurCollection() {
  return (
    <section className="bg-primary-light py-16 px-4">
      <div className="max-w-[1280px] mx-auto text-center relative">
        <div className="relative pb-7">
          <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
            Our Collection
          </h2>
          <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
        </div>
        <p className="text-white text-base md:text-lg mx-auto max-w-[640px] text-center mt-5">
          Bring home a piece of the legacy. Choose from our signature card deck,
          digital wallpapers, or our new DIY coloring book.
        </p>

        <div className="relative mt-10 max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="relative"
          >
            {COLLECTIONDATA.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-primary-dark rounded-4xl p-6 md:flex md:items-center md:gap-8">
                  <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      width={180}
                      height={240}
                      className="rounded shadow-lg w-80"
                    />
                  </div>
                  <div className="text-left md:w-1/2">
                    <h3 className="text-secondary text-3xl md:text-5xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-white text-3xl md:text-5xl font-bold">
                        {item.price}
                      </span>
                      <span className="text-white line-through text-3xl md:text-5xl font-bold">
                        {item.originalPrice}
                      </span>
                    </div>
                    <button className="bg-secondary text-white px-8 py-4 rounded-xl hover:cursor-pointer hover:opacity-90 transition">
                      {item.buttonText}
                    </button>
                    <p className="text-sm font-light text-white italic mt-5">
                      {item.deliveryNote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="custom-prev absolute -left-[72px] top-1/2 transform -translate-y-1/2 border-2 border-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow ">
            <ChevronLeftIcon className="text-white w-6 h-6" />
          </div>
          <div className="custom-next absolute -right-[72px] top-1/2 transform -translate-y-1/2 border-2 border-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow ">
            <ChevronRightIcon className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Custom Dots */}
        <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
      </div>
    </section>
  );
}
