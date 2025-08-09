import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="community" className="px-4 sm:px-6 py-16 md:py-20 bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <div className="relative pb-7">
            <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
              From Our Community
            </h2>
            <span className="absolute bottom-0 w-16 h-2 bg-secondary rounded-full left-1/2 transform -translate-x-1/2"></span>
          </div>
          <p className="text-white text-base md:text-lg mx-auto max-w-[454px] text-center mt-5">
            See how families, educators, seekers of wisdom are using their
            decks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Treeshna"
            title="Child Care"
            description="TinyWisdom Cards have become a little daily ritual for me and my family. Every morning, we pick a card, read its words, and somehow, it always feels like the message is exactly what we needed that day. They’re beautiful to look at, but more than that, they carry this quiet magic—reminding us to pause, breathe, and see the world with softer eyes. It’s amazing how something so small can create such big moments of connection and clarity."
            imageUrl="/testimonials/gaurav.jpeg"
          />
          <TestimonialCard
            name="Sabina Timilsina"
            title="Educator"
            description="TinyWisdom Cards turn small moments into gentle reminders to slow down and cherish life. I’m obsessed."
            imageUrl="/testimonials/samikshya.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
