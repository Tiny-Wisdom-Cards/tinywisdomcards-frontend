import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-20 h-screen flex items-center ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 pt-28">
        {/* Left Content */}
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
          <Link href="/collection">
            <button className="bg-secondary text-white px-8 py-2 rounded-full my-12 transition hover:cursor-pointer hover:opacity-90 font-semibold">
              Explore the cards
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={490}
            height={490}
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[490px] h-auto object-cover object-center"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
