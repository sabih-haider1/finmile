import Image from 'next/image';

const brands = [
  { name: 'UpToYourDoor', logo: '/assets/logos/brands/uptoyourdoor.png' },
  { name: 'AG1', logo: '/assets/logos/brands/ag1.png' },
  { name: 'TikTok Shop', logo: '/assets/logos/brands/tiktok-shop.png' },
  { name: 'Net Zero Logistics', logo: '/assets/logos/brands/net-zero.png' },
  { name: 'Ricoh', logo: '/assets/logos/brands/ricoh.png' },
];

export const TrustSection = () => {
  return (
    <section className="w-full py-[clamp(32px,4vw,40px)] pb-[41px] -mb-[1px] relative z-10 bg-white flex flex-col items-center px-6 lg:px-20">
      <h2 className="text-[#2F1C8C] font-bold text-[12px] tracking-[2px] uppercase mb-10 text-center leading-[15px] text-balance">
        TRUSTED BY THE WORLD&apos;S BIGGEST BRANDS
      </h2>

      <style>{`
        @keyframes mobileMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-mobile-marquee {
          animation: mobileMarquee 25s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="md:hidden relative w-[calc(100%+3rem)] -mx-6 overflow-hidden bg-white mb-6 pb-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-mobile-marquee hover:![animation-play-state:paused] items-center">
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex-shrink-0 bg-[#F6F8FA] rounded-[16px] flex items-center justify-center w-[130px] h-[72px] mx-3 overflow-hidden shadow-sm border border-gray-50/50">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={110}
                height={40}
                className="w-auto h-auto max-h-[28px] max-w-[100px] object-contain opacity-90 mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-11 mb-12 max-w-[1600px] w-full">
        {brands.map((brand, index) => {
          const isOddLastItem = brands.length % 2 !== 0 && index === brands.length - 1;

          return (
            <div
              key={brand.name}
              className={`bg-[#F6F8FA] rounded-[12px] p-3 flex items-center justify-center w-full max-w-[200px] h-[106px] sm:h-[112px] md:w-[220px] md:max-w-none md:h-[120px] ${isOddLastItem ? 'col-span-2 justify-self-center md:col-span-1' : ''}`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={190}
                height={64}
                sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 190px"
                className="max-h-[62px] md:max-h-[56px] w-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};