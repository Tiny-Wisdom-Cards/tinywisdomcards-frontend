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

        {/* Benefits Flow */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex items-center w-full justify-start">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full mr-4"></div>
                <div className="bg-orange-100 text-orange-800 px-8 py-3 rounded-lg text-sm font-medium">
                  Discounted Pricing for Orders of 25+ Decks
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-end">
              <div className="flex items-center">
                <div className="bg-green-700 text-white px-8 py-3 rounded-lg text-sm font-medium">
                  Free Shipping on qualifying quantities
                </div>
                <div className="w-6 h-6 bg-orange-500 rounded-full ml-4"></div>
              </div>
            </div>

            <div className="flex items-center w-full justify-start">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full mr-4"></div>
                <div className="bg-slate-700 text-white px-8 py-3 rounded-lg text-sm font-medium">
                  Custom Branding Options (for schools or events)
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-end">
              <div className="flex items-center">
                <div className="bg-orange-100 text-orange-800 px-8 py-3 rounded-lg text-sm font-medium">
                  Support for Educational & Wellness Programs
                </div>
                <div className="w-6 h-6 bg-orange-500 rounded-full ml-4"></div>
              </div>
            </div>

            <div className="flex items-center w-full justify-start">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full mr-4"></div>
                <div className="bg-green-700 text-white px-8 py-3 rounded-lg text-sm font-medium">
                  Priority Handling & Dedicated Support
                </div>
              </div>
            </div>

            <div className="flex items-center w-full justify-end">
              <div className="flex items-center">
                <div className="bg-slate-700 text-white px-8 py-3 rounded-lg text-sm font-medium">
                  International Shipping Available
                </div>
                <div className="w-6 h-6 bg-orange-500 rounded-full ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
