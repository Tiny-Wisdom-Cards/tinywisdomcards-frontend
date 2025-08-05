import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20 bg-primary">
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
            name="Bibek Torello"
            title="Single Mother"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            imageUrl="/testimonials/1.png"
          />
          <TestimonialCard
            name="Mike Roshan"
            title="Educator"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            imageUrl="/testimonials/2.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
