import Image from "next/image";

const Partners = () => {
  const partnersArray= ['bookverse.png','Patan.png','nepal.png','tibet.png','Pilgrims.png','vajra.png']
  return (
    <section  className="px-4 sm:px-6 py-8 bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="relative pb-7">
            <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
              We are available at
            </h2>
            <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
          </div>
          <p className="text-white text-base md:text-lg mx-auto max-w-[454px] text-center mt-5">
          
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-16 mt-8 md:mt-16">
          {partnersArray.map((item) => (
            <Image
              key={item}
              src={`/partners/${item}`}
              alt={`Partner ${item}`}
              width={600}
              height={600}
              className="w-54 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
