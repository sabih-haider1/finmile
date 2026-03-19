import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function FaqContactCTA() {
  return (
    <div className="mt-12 md:mt-16 bg-gray-50/50 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center border border-gray-100">
      <div className="w-16 h-16 md:w-20 md:h-20 mb-5 relative">
        <Image
          src="/assets/images/mailiconfaqs.png"
          alt="Mail Icon"
          fill
          className="object-contain"
        />
      </div>
      <h4 className="text-[22px] md:text-[26px] font-bold text-black mb-3">
        Still Have Questions?
      </h4>
      <p
        className="text-[15px] md:text-[17px] max-w-[700px] mb-8 leading-relaxed"
        style={{ color: '#6C757D' }}
      >
        Our team is here to help. Contact us for personalized assistance with your logistics needs.
      </p>
      <Link href="/contact" className="inline-block transition-transform hover:scale-[1.02] active:scale-95">
        <button
          className="text-white font-[400] text-[15px] md:text-[16px] px-6 py-2.5 shadow-sm"
          style={{ backgroundColor: '#6A27D4', borderRadius: '24px' }}
        >
          Contact us
        </button>
      </Link>
    </div>
  );
}
