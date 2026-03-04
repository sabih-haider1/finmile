import React from 'react';

export const TrustSection = () => {
  const brands = [
    { name: 'UpToYourDoor', logo: '/assets/logos/brands/uptoyourdoor.png' },
    { name: 'AG1', logo: '/assets/logos/brands/ag1.png' },
    { name: 'TikTok Shop', logo: '/assets/logos/brands/tiktok-shop.png' },
    { name: 'Net Zero Logistics', logo: '/assets/logos/brands/net-zero.png' },
    { name: 'Ricoh', logo: '/assets/logos/brands/ricoh.png' },
  ];

  return (
    <section className='w-full py-8 bg-white flex flex-col items-center px-6 lg:px-20'>
      <h3 className='text-[#2F1C8C] font-bold text-[12px] tracking-[2px] uppercase mb-6 text-center leading-[15px]'>
        TRUSTED BY THE WORLD'S BIGGEST BRANDS
      </h3>

      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-12 max-w-[1600px] w-full'>
        {brands.map((brand) => (
          <div key={brand.name} className='bg-[#F6F8FA] rounded-[16px] p-6 flex items-center justify-center w-[180px] h-[100px] md:w-[220px] md:h-[120px]'>
            <img src={brand.logo} alt={brand.name} className='max-h-[50px] w-auto object-contain' />
          </div>
        ))}
      </div>

      <p className='text-[#9CA3AF] text-[16px] font-medium text-center leading-[20px] tracking-[0px]'>
        Finmile powers deliveries for <span className='text-[#111827]'>JD.com, TikTok Shop, ILG</span>, and other global leaders.
      </p>
    </section>
  );
};

export const FeaturesSection = () => {
  return (
    <section className='w-full py-6 lg:py-10 pb-6 bg-white flex flex-col items-center px-6 lg:px-20 relative'>
      <div className='max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start'>

        {/* Left Column: Precise Typography Match */}
        <div className='flex flex-col space-y-12 pt-4'>
          <h2 className='text-[#2F1C8C] text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight'>
            Stop Managing <br className='hidden md:block' />
            Software and Start <br className='hidden md:block' />
            Directing Outcomes.
          </h2>

          <div className='space-y-10'>
            <p className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
              Finmile replaces fragmented logistics tools with autonomous agents that plan, execute, and continuously improve delivery operations in real time.
            </p>

            <p className='text-[#2F1C8C] text-[14px] md:text-[15px] lg:text-[16px] font-medium'>
              You define the objective. The system handles the complexity.
            </p>

            <p className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
              Unlike static route planners, Finmile's AI constantly learns.
            </p>

            <p className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed'>
              It adapts to real-world conditions such as traffic, weather, and driver patterns to create routes that get faster and cheaper every day.
            </p>
          </div>
        </div>

        {/* Right Column: Single Image with Overlays */}
        <div className='relative w-full flex items-center justify-center pt-0 lg:pt-0 px-4 lg:px-0 min-h-[500px] lg:min-h-[600px]'>

          {/* Background Highlight Glow */}
          <div className='absolute inset-0 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none' />

          <div className='relative z-10 w-full max-w-[800px]'>
            <img
              src='/assets/images/features/app-screen.png'
              alt='Finmile Dashboard and Mobile App'
              className='w-full h-auto drop-shadow-[0_45px_90px_rgba(0,0,0,0.12)] object-contain relative z-10'
            />

            {/* 42% Card - Top Left */}
            <div className='absolute -top-4 left-0 md:-top-10 md:-left-24 z-20 bg-white/95 backdrop-blur-md rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white w-[220px] md:w-[320px]'>
              <div className='text-[#2F1C8C] text-[36px] md:text-[40px] font-bold leading-none mb-1.5'>42%</div>
              <div className='text-[#6B7280] text-[13px] md:text-[14px] font-medium leading-tight'>Fewer routes with AI optimisation</div>
            </div>

            {/* 91% Card - Bottom Right (Wider width) */}
            <div className='absolute -bottom-6 right-0 md:-bottom-16 md:-right-[-8] z-20 bg-[#2D1B69] rounded-[24px] p-6 w-[200px] md:w-[300px]'>
              <div className='text-white text-[36px] md:text-[40px] font-bold leading-none mb-1.5'>91%</div>
              <div className='text-white/80 text-[13px] md:text-[14px] font-medium leading-tight'>Reduction in WISMO inquiries</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
