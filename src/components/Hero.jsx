// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-20 h-screen flex items-center ">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 pt-28">
//         {/* Left Content */}
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-md">
//             Unlock Wisdom <br className="hidden sm:block" />
//             <span className="block max-w-[312px] mx-auto md:mx-0">
//               One Card at a Time
//             </span>
//           </h1>
//           <p className="text-white mt-6 text-base lg:text-lg drop-shadow-sm">
//             Discover a timeless collection where ancient wisdom meets playful
//             learning. Crafted for curious minds of all ages.
//           </p>
//           <Link href="/collection">
//             <button className="bg-secondary text-white px-8 py-2 rounded-full my-12 transition hover:cursor-pointer hover:opacity-90 font-semibold">
//               Explore the cards
//             </button>
//           </Link>
//         </div>

//         {/* Right Image */}
//         <div className="flex-shrink-0">
//           <Image
//             src="/images/hero-img.png"
//             alt="Hero Image"
//             width={490}
//             height={490}
//             className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[490px] h-auto object-cover object-center"
//             placeholder="blur"
//             blurDataURL="/images/placeholder.png"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import Image from "next/image";
// import Link from "next/link";

// const cardImages = [
//   "/hero/1a.png",
//   "/hero/1b.png",
//   "/hero/2.png",
//   "/hero/3.png",
//   "/hero/4.png",
//   "/hero/5.png",
// ];

// const cardTransforms = [
//   "-rotate-[0deg] -translate-x-70 -translate-y-60 z-10",
//   "-rotate-[0deg] translate-x-5 -translate-y-60 z-20",
//   "-rotate-[0deg] -translate-x-0 -translate-y-10 z-30",
//   "rotate-0 z-40", // Center/top card
//   "rotate-[0deg] translate-x-10 -translate-y-10 z-30",
//   "rotate-[0deg] -translate-x-90 -translate-y-20 z-20",
// ];

// const Hero = () => {
//   return (
//     <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-20 h-screen flex items-center ">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 pt-28">
//         {/* Left Content */}
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-md">
//             Unlock Wisdom <br className="hidden sm:block" />
//             <span className="block max-w-[312px] mx-auto md:mx-0">
//               One Card at a Time
//             </span>
//           </h1>
//           <p className="text-white mt-6 text-base lg:text-lg drop-shadow-sm">
//             Discover a timeless collection where ancient wisdom meets playful
//             learning. Crafted for curious minds of all ages.
//           </p>
//           <Link href="/collection">
//             <button className="bg-secondary text-white px-8 py-2 rounded-full my-12 transition hover:cursor-pointer hover:opacity-90 font-semibold">
//               Explore the cards
//             </button>
//           </Link>
//         </div>

//         <div className="relative w-[320px] h-[420px] md:w-[450px] md:h-[500px] flex-shrink-0 flex items-center justify-center">
//           {cardImages.map((src, idx) => (
//             <Image
//               key={src}
//               src={src}
//               alt={`Card ${idx + 1}`}
//               width={250}
//               height={350}
//               className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-[24px] bg-white ${cardTransforms[idx]}`}
//               style={{ transition: "transform 0.2s" }}
//               draggable={false}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

const bgCardImages = [
  "/hero/1a.png",
  "/hero/1b.png",
  "/hero/2.png",
  "/hero/3.png",
  "/hero/4.png",
];

const staticCardImage = "/hero/5.png";

const CARD_WIDTH = 200;
const CARD_HEIGHT = 300;
const SM_CARD_WIDTH = 150;
const SM_CARD_HEIGHT = 250;

const ORBIT_RADIUS = 100;

const Hero = () => {
  const [angle, setAngle] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      setAngle((prev) => prev + 0.005);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="max-w-[1280px] overflow-hidden mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-20 min-h-screen flex items-center ">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 pt-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-md">
            Unlock Wisdom <br className="hidden sm:block" />
            <span className="block max-w-[312px] mx-auto md:mx-0">
              One Card at a Time
            </span>
          </h1>
          <p className="text-white mt-6 text-base lg:text-lg drop-shadow-sm">
            Discover a timeless collection where ancient wisdom meets playful
            learning. Crafted for curious minds of all ages.
          </p>
          <Link href="/#collection">
            <button className="bg-secondary text-white px-8 py-2 rounded-full my-12 transition hover:cursor-pointer hover:opacity-90 font-semibold">
              Explore the cards
            </button>
          </Link>
        </div>

        {/* <div className="flex-shrink-0 md:hidden">
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={490}
            height={490}
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[490px] h-auto object-cover object-center"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </div> */}
        <div className="relative md:hidden w-full h-[420px] md:w-[450px] md:h-[500px] flex-shrink-0 flex items-center justify-center">
          {bgCardImages.map((src, index) => {
            const increaseangle = angle + (index * (2 * Math.PI / bgCardImages.length));
            const x = ORBIT_RADIUS * Math.cos(increaseangle);
            const y = ORBIT_RADIUS * Math.sin(increaseangle);
            return (
              <Image
                key={src}
                src={src}
                alt={`Card ${index + 1}`}
                width={SM_CARD_WIDTH}
                height={SM_CARD_HEIGHT}
                className="absolute left-1/2 top-1/2 shadow-xl rounded-[24px] bg-white"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${(increaseangle * 180 / Math.PI) + 10}deg)`,
                  opacity: 0.93,
                  zIndex: 10 + index,
                  transition: "box-shadow 0.2s"
                }}
                draggable={false}
              />
            );
          })}
          <Image
            src={staticCardImage}
            alt="Main Card"
            width={SM_CARD_WIDTH}
            height={SM_CARD_HEIGHT}
            className="absolute left-1/2 top-1/2 shadow-2xl rounded-[24px] bg-white z-50"
            style={{
              transform: "translate(-50%, -50%)",
            }}
            draggable={false}
          />
        </div>


        <div className="relative hidden w-[320px] h-[420px] md:w-[450px] md:h-[500px] flex-shrink-0 md:flex items-center justify-center">
          {bgCardImages.map((src, index) => {
            const increaseangle = angle + (index * (2 * Math.PI / bgCardImages.length));
            const x = ORBIT_RADIUS * Math.cos(increaseangle);
            const y = ORBIT_RADIUS * Math.sin(increaseangle);
            return (
              <Image
                key={src}
                src={src}
                alt={`Card ${index + 1}`}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                className="absolute left-1/2 top-1/2 shadow-xl rounded-[24px] bg-white"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${(increaseangle * 180 / Math.PI) + 10}deg)`,
                  opacity: 0.93,
                  zIndex: 10 + index,
                  transition: "box-shadow 0.2s"
                }}
                draggable={false}
              />
            );
          })}
          <Image
            src={staticCardImage}
            alt="Main Card"
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            className="absolute left-1/2 top-1/2 shadow-2xl rounded-[24px] bg-white z-50"
            style={{
              transform: "translate(-50%, -50%)",
            }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
