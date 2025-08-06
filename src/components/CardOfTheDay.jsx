import FlippableCard from "./FlippableCard";

const CardOfTheDay = () => {
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
          Click the card to reveal your message for today. Let it guide your
          thoughts and actions
        </p>

        <div className="flex items-center justify-around gap-8 flex-wrap mt-10">
          <FlippableCard />
          <FlippableCard />
          <FlippableCard />
          <FlippableCard />
        </div>
      </div>
    </section>
  );
};

export default CardOfTheDay;
