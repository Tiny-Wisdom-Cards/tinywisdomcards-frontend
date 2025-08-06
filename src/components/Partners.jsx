import Image from "next/image";

const Partners = () => {
  return (
    <section id="community" className="px-4 sm:px-6 py-8 bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="relative pb-7">
            <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
              Our Partners
            </h2>
            <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
          </div>
          <p className="text-white text-base md:text-lg mx-auto max-w-[454px] text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. E
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-16 mt-8 md:mt-16">
          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={`/partners/partner-1.png`}
              alt={`Partner ${item}`}
              width={600}
              height={600}
              className="w-44 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
