import Link from "next/link";

const CtaSection = () => {
  return (
    <section
    // style={{backgroundImage: url('path/to/your/image.jpg'), backgroundSize: cover, backgroundPosition: center, height: '300px'}}
     className="py-24 px-4 relative sm:px-6 bg-[url('/images/4.png')] bg-cover bg-center bg-fixed">
      
      <div className="max-w-[1280px] relative h-full inset-0 z-30 mx-auto text-center">
        <h2 className="text-3xl md:text-6xl text-white font-medium text-center">
          Beyond the Cards
        </h2>
        <p className="my-5 mb-12 max-w-3xl mx-auto text-white">
          The world of Tiny Wisdom extends to your walls and your creativity.
          Explore our new collection of digital wallpapers and printable
          coloring books.
        </p>
         <Link href="/#collection" className="bg-secondary hover:cursor-pointer mt-10 px-8 py-2 font-semibold text-lg text-white rounded-full">
          Explore the Full Collection
        </Link>
      </div>

      <div className="absolute z-20 inset-0 bg-primary-light/50">

      </div>
    </section>
  );
};

export default CtaSection;
