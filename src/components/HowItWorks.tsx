
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-10 bg-primary-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">How it work?</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-primary-600">Simplifying complex text in just a few steps</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Input Your Text</h3>
              <p className="mt-4 text-base text-primary-600">Copy and paste any complex or detailed text into the input box.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">AI Simplification</h3>
              <p className="mt-4 text-base text-primary-600">Our advanced AI processes the text and generates a simplified version instantly.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Receive Clear Text</h3>
              <p className="mt-4 text-base text-primary-600">Get your easy-to-understand text and enjoy hassle-free reading.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;