'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const AgentCard = ({ title, description, benefits, index, total }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate dynamic top positioning for the stacked scroll effect
  const stickyTop = `calc(80px + ${index * 20}px)`;

  // Z-index ensures later cards overlap earlier ones correctly - higher index = higher z-index
  const zIndex = (index + 1) * 10;

  // Slight scaling effect for underlying cards to simulate depth
  const scale = 1 - ((total - index - 1) * 0.02);

  return (
    <div
      className='lg:sticky w-[98%] max-w-[1440px] min-h-[650px] lg:min-h-[800px] bg-[#F8F7FF] rounded-[48px] md:rounded-[40px] px-8 md:px-10 lg:px-12 pt-2 md:pt-2.5 lg:pt-3 pb-4 md:pb-5 lg:pb-6 shadow-[0_20px_60px_rgba(47,28,140,0.06)] border border-indigo-50/50 flex flex-col lg:flex-row items-center gap-18 lg:gap-24 transform-gpu transition-all duration-500 mb-8 lg:mb-0 overflow-hidden'
      style={{
        top: isLargeScreen ? stickyTop : 'auto',
        zIndex: isLargeScreen ? zIndex : 'auto',
        marginTop: isLargeScreen ? (index === 0 ? '40px' : '0px') : '0px',
        marginBottom: isLargeScreen ? (index === total - 1 ? '40px' : '180px') : '32px',
        transform: isLargeScreen ? `scale(${scale})` : 'none',
        transformOrigin: 'top center'
      }}
    >

      {/* Left: Text Content */}
      <div className='flex flex-col flex-1 space-y-8 text-left items-start z-10 w-full pt-2'>
        <h3 className='text-[#2F1C8C] text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.05] tracking-tight'>
          {title}
        </h3>

        <p className='text-[#64748B] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed max-w-[550px] opacity-90'>
          {description}
        </p>

        <div className='space-y-4 w-full pt-2'>
          {benefits.map((benefit, i) => (
            <div key={i} className='bg-white rounded-full px-6 md:px-8 py-4 flex items-center gap-4 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-[#F0F0F8] w-full max-w-[500px]'>
              <div className='flex items-center justify-center border-[1.5px] border-[#2F1C8C] rounded-full w-6 h-6 shrink-0'>
                <CheckCircle2 className='text-[#2F1C8C] w-4 h-4' strokeWidth={3} />
              </div>
              <span className='text-[#2F1C8C] font-bold text-[16px] md:text-[17px] tracking-tight'>{benefit}</span>
            </div>
          ))}
        </div>

        <button className='bg-[#6A27D4] text-white px-10 py-3.5 rounded-full font-semibold text-[16px] w-fit hover:bg-[#5821B0] transition-colors mt-6'>
          Learn More
        </button>
      </div>

      {/* Right: Dashboard Image */}
      <div className='flex-1 relative w-full flex justify-end items-center'>
        <div className='w-full max-w-[800px]'>
          {/* Dashboard Image Only */}
          <img
            src='/assets/images/agents/dashboard-v2.png'
            alt={`${title} Finmile Dashboard`}
            className="w-full h-auto rounded-xl drop-shadow-[0_20px_40px_rgba(47,28,140,0.08)]"
          />
        </div>
      </div>
    </div>
  );
};

export const AIAgentsSection = () => {
  const agents = [
    {
      title: 'Planning Agent',
      description: 'Continuously evaluates whether the network needs to be replanned. Monitors demand changes, capacity constraints, traffic, and depot conditions. Automatically regenerates multi-drop routes in seconds when conditions change.',
      benefits: ['Fewer Routes', 'Higher Drop Density', 'Plans that stay valid as reality changes']
    },
    {
      title: 'Live Operations Agent',
      description: 'Monitors every delivery in progress and continuously assesses SLA risk across the network. Issues are handled before they impact customers.',
      benefits: ['Higher on time performance', 'Fewer failed deliveries', 'No reactive firefighting']
    },
    {
      title: 'Customer Agent',
      description: 'Communicates with end customers automatically when delivery risk is detected. Provides real-time dynamic tracking and context-aware responses.',
      benefits: ['Fewer WISMO contacts', 'Lower claims volume', 'Better brand experience at scale']
    }
  ];

  return (
    <section className={`w-full bg-white flex flex-col items-center px-4 lg:px-20 py-16 lg:py-20 ${montserrat.className}`}>

      {/* Centered Main Section Header */}
      <div className='text-center mb-10 w-full max-w-[1400px]'>
        <h2 className='text-[#2F1C8C] text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-8 tracking-tight leading-[1] text-center'>
          Meet Your Specialized AI Agents
        </h2>
        <div className='max-w-3xl mx-auto'>
          <p className='text-[#64748B] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed opacity-100'>
            Stop managing software and start directing outcomes. Our autonomous agents work 24/7 to solve bottlenecks before they appear.
          </p>
        </div>
      </div>

      {/* Cards Container - The relative wrapper for sticky context */}
      <div className='w-full flex flex-col items-center relative max-w-[1440px] pb-6'>
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            index={index}
            total={agents.length}
            {...agent}
          />
        ))}
      </div>

      {/* Re-added Footer Conclusion per screenshot */}
      <div className='mt-6 text-center space-y-12 w-full max-w-[1200px]'>
        <p className='text-[#848DA0] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[16px] mx-auto px-4 text-center'>
          All agents operate through a single control layer, sharing context and learning from every parcel that moves through the system.
        </p>

        <div className='flex flex-col items-center gap-6'>
          <h4 className='text-[#2F1C8C] text-[12px] md:text-[14px] lg:text-[16px] tracking-tight flex flex-col md:flex-row items-center gap-2 justify-center'>
            <span className='font-semibold opacity-90 text-[#2F1C8C]'>This is not automation.</span>
            <span className='font-semibold text-[#2F1C8C]'>This is autonomous execution.</span>
          </h4>
        </div>
      </div>

    </section>
  );
};
