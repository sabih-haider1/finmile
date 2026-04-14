import React from 'react';

export function FaqSection() {
  return (
    <section className="py-8 md:py-12 md:py-[clamp(40px,5vw,64px)] px-6 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <h2
          className="font-semibold mb-3 tracking-normal md:tracking-tight text-balance text-[clamp(32px,4vw,48px)]"
          style={{ color: '#2F1C8C' }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-[16px] md:text-[18px] max-w-[1000px] leading-relaxed"
          style={{ color: '#6C757D' }}
        >
          Find answers to common questions about Finmile&apos;s platform, features, and logistics solutions.
        </p>
      </div>
    </section>
  );
}
