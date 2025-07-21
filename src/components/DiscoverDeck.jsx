import Image from "next/image";

const DiscoverDeck = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card Example",
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={1200}
          className="rounded-lg w-[290px] h-full"
        />
        <div className="absolute"></div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl md:text-5xl text-secondary mt-5">{title}</h3>
        <p className="text-white max-w-lg mt-5">{description}</p>
      </div>
    </div>
  );
};

export default DiscoverDeck;
