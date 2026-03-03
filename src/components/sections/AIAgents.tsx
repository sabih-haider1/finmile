import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AgentCard = ({ title, description, benefits, index, total }) => {
  // Calculate dynamic top positioning for the stacked scroll effect
  const stickyTop = `calc(120px + ${index * 40}px)`;

  // Z-index ensures later cards overlap earlier ones correctly
  const zIndex = index * 10;

  // Slight scaling effect for underlying cards to simulate depth
  const scale = 1 - ((total - index - 1) * 0.02);

  return (
    <div
      className='sticky w-[98%] max-w-[1440px] min-h-[600px] lg:min-h-[750px] bg-[#F8F7FF] rounded-[48px] md:rounded-[40px] p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(47,28,140,0.06)] border border-indigo-50/50 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transform-gpu transition-all duration-500'
      style={{
        top: stickyTop,
        zIndex: zIndex,
        marginBottom: index === total - 1 ? '0px' : '40px', /* Space between cards unless it's the last one */
        transform: `scale(${scale})`,
        transformOrigin: 'top center'
      }}
    >

      {/* Left: Text Content */}
      <div className='flex flex-col flex-1 space-y-8 text-left items-start z-10 w-full pt-8'>
        <h3 className='text-[#2F1C8C] text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-tight'>
          {title}
        </h3>

        <p className='text-[#64748B] text-[16px] md:text-[18px] leading-relaxed max-w-[550px] font-medium opacity-90'>
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
    <section className='w-full bg-white flex flex-col items-center px-4 lg:px-20 py-16 lg:py-20'>

      {/* Centered Main Section Header */}
      <div className='text-center mb-20 w-full max-w-[1400px]'>
        <h2 className='text-[#2F1C8C] text-[48px] md:text-[64px] xl:text-[80px] font-bold mb-8 tracking-tight leading-[1] text-center'>
          Meet Your Specialized AI Agents
        </h2>
        <div className='max-w-3xl mx-auto'>
          <p className='text-[#64748B] text-[18px] md:text-[22px] leading-relaxed font-medium opacity-90'>
            Stop managing software and start directing outcomes. Our autonomous agents work 24/7 to solve bottlenecks before they appear.
          </p>
        </div>
      </div>

      {/* Cards Container - The relative wrapper for sticky context */}
      <div className='w-full flex flex-col items-center relative max-w-[1440px] pb-24'>
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
      <div className='mt-16 text-center space-y-12 w-full max-w-[1200px]'>
        <p className='text-[#848DA0] text-[18px] md:text-[20px] max-w-3xl font-medium leading-relaxed mx-auto px-4 text-center'>
          All agents operate through a single control layer, sharing context and learning from every parcel that moves through the system.
        </p>

        <div className='flex flex-col items-center gap-6'>
          <h4 className='text-[#4A3D73] text-[20px] md:text-[24px] lg:text-[26px] tracking-tight flex flex-col md:flex-row items-center gap-2 justify-center'>
            <span className='font-bold opacity-90 text-[#3B257E]'>This is not automation.</span>
            <span className='font-bold text-[#3B257E]'>This is autonomous execution.</span>
          </h4>
        </div>
      </div>

    </section>
  );
};
