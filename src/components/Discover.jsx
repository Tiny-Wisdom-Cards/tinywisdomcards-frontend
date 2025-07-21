import { discoverDeckData } from "@/constants/discoverData";
import DiscoverDeck from "./DiscoverDeck";

const Discover = () => {
  return (
    <section className="py-10 px-2 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <div className="relative pb-7">
            <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
              Discover the Deck
            </h2>
            <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
          </div>
          <p className="text-white text-base md:text-lg max-w-4xl mx-auto text-center my-5">
            Two unique experiences, one beautifully crafted deck. Journey
            through the alphabet with mythological heroes, and find peace with
            sacred mantras.
          </p>
        </div>
        <div className="flex items-center justify-around flex-wrap gap-4 mt-8 md:mt-16">
          {discoverDeckData.map((deck, index) => {
            return (
              <DiscoverDeck
                key={index}
                title={deck.title}
                description={deck.description}
                imageSrc={deck.image}
                imageAlt={deck.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discover;
