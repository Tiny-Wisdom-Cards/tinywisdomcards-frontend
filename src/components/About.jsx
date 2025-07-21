import Image from "next/image";

const About = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-2 md:px-8">
      <div className="max-w-[1280px] mx-auto flex items-center justify-around flex-wrap lg:flex-no-wrap gap-20">
        <Image
          src="/images/stacked-cards.png"
          alt="Stacked Cards"
          height={1200}
          width={1200}
          className="w-[348px]"
        />

        <div className="max-w-[710px] text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl text-white font-medium">
            Forged from Tradition, Designed for Today.
          </h2>
          <p className="text-base md:text-lg text-white py-5">
            Tiny Wisdom Cards began as a simple dream: to pass down the epic
            stories and profound wisdom of our heritage to the next generation
            in a way that felt both authentic and accessible. We wanted to
            create more than just a learning tool; we envisioned a family
            heirloom.
          </p>
          <p className="text-base md:text-lg text-white">
            Each item in our collection is a testament to this vision,
            meticulously designed with imagination and reverence. It's our
            legacy, shared with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
