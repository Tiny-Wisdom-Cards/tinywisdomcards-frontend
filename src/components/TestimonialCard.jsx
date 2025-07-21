"use client";

import Image from "next/image";

const TestimonialCard = ({ name, title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-md flex flex-col items-center text-center border-4 border-orange-500 relative mb-10 md:mb-2">
      <div className="w-20 h-20 rounded-full overflow-hidden absolute top-[-48px] left-1/2 transform -translate-x-1/2 border-4 border-primary">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-24 h-24 rounded-full "
        />
      </div>
      <div className="pt-12 max-w-md">
        <p className="text-primary-700 mb-2">{description}</p>
        <p className="text-xl font-semibold text-primary mt-10">{name}</p>
        <p className="text-base text-primary">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
