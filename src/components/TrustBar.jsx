import React from 'react';
import { trustedBrands } from '../mock';

const TrustBar = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm font-medium mb-8">
          Trusted by brands, startups, and agencies across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustedBrands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-400 font-semibold text-lg hover:text-orange-500 transition-colors duration-200 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
