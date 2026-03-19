import React from 'react';

export function FaqSection() {
  return (
    <section className="py-12 md:py-16 px-6 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <h2
          className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold mb-3 tracking-tight"
          style={{ color: '#2F1C8C' }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-[16px] md:text-[18px] max-w-[1000px] leading-relaxed"
          style={{ color: '#6C757D' }}
        >
          Find answers to common questions about Finmile's platform, features, and logistics solutions.
        </p>
      </div>
    </section>
  );
}
