// import FlippableCard from "./FlippableCard";

// const CardOfTheDay = () => {
//   return (
//     <section id="card-of-the-day" className="bg-primary-light py-8 px-4 sm:px-8">
//       <div className="max-w-[1280px] mx-auto">
//         <div className="relative pb-7">
//           <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
//             Card of the Day
//           </h2>
//           <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
//         </div>
//         <p className="text-white text-base md:text-lg mx-auto max-w-[454px] text-center mt-5">
//           Click the card to reveal your message for today. Let it guide your
//           thoughts and actions
//         </p>

//         <div className="flex items-center justify-around gap-8 flex-wrap mt-10">
//           <div
//             className="w-[210px] h-[310px] cursor-pointer"
//             style={{ perspective: "1000px" }}
//             onClick={() => setFlipped((prev) => !prev)}
//           >
//             <div
//               className={`relative w-full h-full transition-transform duration-700 ${flipped ? "transform rotate-y-180" : "transform"
//                 }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side */}
//               <div
//                 className="absolute w-full h-full"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <Image
//                   src="/images/cotd-back.png"
//                   alt="Card back"
//                   fill
//                   className="rounded-lg shadow-lg object-cover"
//                 />
//               </div>

//               {/* Back Side */}
//               <div
//                 className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-4 text-center"
//                 style={{
//                   transform: "rotateY(180deg)",
//                   backfaceVisibility: "hidden",
//                 }}
//               >
//                 <p className="text-primary text-sm font-semibold">
//                   You are exactly where you're meant to be. Trust the timing.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="w-[210px] h-[310px] cursor-pointer"
//             style={{ perspective: "1000px" }}
//             onClick={() => setFlipped((prev) => !prev)}
//           >
//             <div
//               className={`relative w-full h-full transition-transform duration-700 ${flipped ? "transform rotate-y-180" : "transform"
//                 }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side */}
//               <div
//                 className="absolute w-full h-full"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <Image
//                   src="/images/cotd-back.png"
//                   alt="Card back"
//                   fill
//                   className="rounded-lg shadow-lg object-cover"
//                 />
//               </div>

//               {/* Back Side */}
//               <div
//                 className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-4 text-center"
//                 style={{
//                   transform: "rotateY(180deg)",
//                   backfaceVisibility: "hidden",
//                 }}
//               >
//                 <p className="text-primary text-sm font-semibold">
//                   You are exactly where you're meant to be. Trust the timing.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="w-[210px] h-[310px] cursor-pointer"
//             style={{ perspective: "1000px" }}
//             onClick={() => setFlipped((prev) => !prev)}
//           >
//             <div
//               className={`relative w-full h-full transition-transform duration-700 ${flipped ? "transform rotate-y-180" : "transform"
//                 }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side */}
//               <div
//                 className="absolute w-full h-full"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <Image
//                   src="/images/cotd-back.png"
//                   alt="Card back"
//                   fill
//                   className="rounded-lg shadow-lg object-cover"
//                 />
//               </div>

//               {/* Back Side */}
//               <div
//                 className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-4 text-center"
//                 style={{
//                   transform: "rotateY(180deg)",
//                   backfaceVisibility: "hidden",
//                 }}
//               >
//                 <p className="text-primary text-sm font-semibold">
//                   You are exactly where you're meant to be. Trust the timing.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="w-[210px] h-[310px] cursor-pointer"
//             style={{ perspective: "1000px" }}
//             onClick={() => setFlipped((prev) => !prev)}
//           >
//             <div
//               className={`relative w-full h-full transition-transform duration-700 ${flipped ? "transform rotate-y-180" : "transform"
//                 }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side */}
//               <div
//                 className="absolute w-full h-full"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <Image
//                   src="/images/cotd-back.png"
//                   alt="Card back"
//                   fill
//                   className="rounded-lg shadow-lg object-cover"
//                 />
//               </div>

//               {/* Back Side */}
//               <div
//                 className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-4 text-center"
//                 style={{
//                   transform: "rotateY(180deg)",
//                   backfaceVisibility: "hidden",
//                 }}
//               >
//                 <p className="text-primary text-sm font-semibold">
//                   You are exactly where you're meant to be. Trust the timing.
//                 </p>
//               </div>
//             </div>
//           </div>



//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardOfTheDay;


'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
// import FlippableCard from "./FlippableCard"; // Not needed for this inline version

import cardoftheday from "@/constants/cardoftheday";

function getRandomItems(arr, n) {
  let result = [];
  let taken = new Set();
  while (result.length < n && result.length < arr.length) {
    let idx = Math.floor(Math.random() * arr.length);
    if (!taken.has(idx)) {
      taken.add(idx);
      result.push(arr[idx]);
    }
  }
  return result;
}

const CardOfTheDay = () => {
  const [lines, setLines] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null); // null until user flips a card

  // On mount, pick 4 distinct random lines
  useEffect(() => {
    setLines(getRandomItems(cardoftheday, 4));
  }, []);

  // Card handlers
  const handleFlip = (idx) => {
    if (flippedIndex === null) setFlippedIndex(idx);
    // No action if already flipped one
  };

  return (
    <section id="card-of-the-day" className="bg-primary-light py-8 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative pb-7">
          <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
            Card of the Day
          </h2>
          <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
        </div>
        <p className="text-white text-base md:text-lg mx-auto max-w-[454px] text-center mt-5">
          Click the card to reveal your message for today. Let it guide your thoughts and actions.
        </p>

        <div className="flex items-center justify-around gap-8 flex-wrap mt-10">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={`w-[210px] h-[310px] cursor-pointer ${flippedIndex !== null && flippedIndex !== idx ? "pointer-events-none opacity-60" : ""}`}
              style={{ perspective: "1000px" }}
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ${flippedIndex === idx ? "transform rotate-y-180" : "transform"}`}
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
                    {line}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {flippedIndex !== null && (
          <p className="mt-10 text-center text-xl text-yellow-200 font-bold">
            This is your card of the day!
          </p>
        )}
      </div>
    </section>
  );
};

export default CardOfTheDay;
