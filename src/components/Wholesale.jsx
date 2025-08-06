import React from "react";

const Wholesale = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Bulk Orders & Wholesale
        </h2>
        <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Are you a school, bookstore, yoga studio, parenting group, or retailer
          looking to inspire children and families with values, mindfulness, and
          cultural richness?
        </p>

        <div className="relative max-w-xl mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">

            <div className="flex items-center w-full justify-start relative">
              <div className="flex items-center w-full md:w-fit">
                <div className="w-6 h-6 bg-orange-500 hidden md:block rounded-full mr-4"></div>
                <div className="bg-orange-100 w-full md:w-fit text-orange-800 px-12 py-3 rounded-lg text-sm font-medium">
                  <p>Discounted Pricing for Orders of 25+ Decks</p>
                </div>
              </div>
              <div className="absolute hidden md:block h-[120px] -right-4 top-3">
                <img src="/images/righthanger.png" className="object-cover h-full w-full" />
              </div>
            </div>

            <div className="flex items-center w-full justify-center md:justify-end relative">
              <div className="absolute hidden md:block h-[120px] -left-4 top-3">
                <img src="/images/lefthanger.png" className="object-cover h-full w-full" />
              </div>
              <div className="flex items-center w-full md:w-fit">
                <div className="bg-primary-green w-full md:w-fit text-white px-12 py-3 rounded-lg text-sm font-medium">
                  <p>Free Shipping on qualifying quantities</p>

                </div>
                <div className="w-6 h-6 bg-transparent hidden md:block rounded-full ml-4"></div>
              </div>
            </div>

            <div className="flex items-center w-full relative justify-center md:justify-start">
              <div className="absolute hidden md:block h-[120px] -right-4 top-3">
                <img src="/images/righthanger.png" className="object-cover h-full w-full" />
              </div>
              <div className="flex items-center w-full md:w-fit">
                <div className="w-6 h-6 bg-transparent hidden md:block rounded-full mr-4"></div>
                <div className="bg-secondary-green  w-full md:w-fit text-white px-4 py-3 rounded-lg text-sm font-medium">
                  <p>Custom Branding Options (for schools or events)</p>

                </div>
              </div>
            </div>

            <div className="flex items-center relative w-full justify-center md:justify-end">
              <div className="absolute hidden md:block h-[120px] -left-4 top-3">
                <img src="/images/lefthanger.png" className="object-cover h-full w-full" />
              </div>
              <div className="flex items-center w-full md:w-fit">
                <div className="bg-orange-100  w-full md:w-fit text-orange-800 px-12 py-3 rounded-lg text-sm font-medium">
                  <p>Support for Educational & Wellness Programs</p>
                </div>
                <div className="w-6 h-6 bg-transparent hidden md:block rounded-full ml-4"></div>
              </div>
            </div>

            <div className="flex relative items-center w-full justify-center md:justify-start">
              <div className="absolute hidden md:block h-[120px] -right-4 top-3">
                <img src="/images/righthanger.png" className="object-cover h-full w-full" />
              </div>
              <div className="flex items-center w-full md:w-fit">
                <div className="w-6 h-6 bg-transparent hidden md:block rounded-full mr-4"></div>
                <div className="bg-primary-green  w-full md:w-fit text-white px-12 py-3 rounded-lg text-sm font-medium">
                  <p>Priority Handling & Dedicated Support</p>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-center md:justify-end">
              <div className="flex items-center  w-full md:w-fit">
                <div className="bg-secondary-green w-full md:w-fit text-white px-12 py-3 rounded-lg text-sm font-medium">
                  <p>International Shipping Available</p>
                </div>
                <div className="w-6 h-6 bg-transparent hidden md:block rounded-full ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
