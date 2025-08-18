import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl mb-8">Contactez nous</h2>
        
        <Link 
          href="/contact"
          className="inline-block border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium"
        >
          PRENDRE CONTACT
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;