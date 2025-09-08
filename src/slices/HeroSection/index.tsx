import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16 px-4 relative">
      {/* Navigation Buttons */}
      <div className="absolute top-6 right-6 flex gap-4">
        <Link 
          href="/mentoring" // This link is correctly pointing to /mentoring
          className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          MENTORING
        </Link>
        <Link 
          href="/seminaires" // This link is correctly pointing to /seminaires
          className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          SÉMINAIRES
        </Link>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
          GuerG
          <span className="text-blue-500 ml-3">■</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg tracking-[0.2em] uppercase text-gray-700 mb-2 font-medium">
          INSTITUT DU SYSTÈME D&apos;INFORMATION DU FUTURE
        </h2>

        {/* Sub-subtitle */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <span className="text-sm text-gray-600">SÉMINAIRES</span>
          <span className="text-sm text-gray-600">MENTORING</span>
        </div>

        {/* CTA Description */}
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          pour CTO, CPO, CARO, CTPO, CISO
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
