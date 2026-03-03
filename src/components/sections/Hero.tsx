import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Home, ClipboardList, Map, Truck, Users, ArrowLeft, Clock, Package } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-[140px] px-4 overflow-hidden bg-[#0B0616] font-sans">
      
      {/* Upper Subtle Glow behind text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      
      {/* Massive Lower Intense Gradient Glow (The sweeping purple glow behind the hero image) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-40 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto space-y-6">
        
        {/* Top Badge */}
        <Badge label="An operating system for execution, not another logistics tool" />

        {/* Headline */}
        <h1 className="text-white text-[44px] md:text-[76px] lg:text-[80px] md:whitespace-nowrap font-bold tracking-tight leading-[1.05] pb-2">
          The <span className="gradient-text-os px-1">OS</span> for Modern Logistics
        </h1>

        {/* Sub-headline */}
        <p className="text-[#9CA3AF] text-[17px] md:text-[19px] font-normal w-full max-w-[760px] leading-relaxed mx-auto px-4 mt-2">
          Finmile AI automates delivery operations end to end, using agentic AI to optimise multi drop routes in
          seconds and deliver full operational visibility through a unified command interface.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 w-full sm:w-auto">
          <Button variant="solid" size="lg">
            See How It Works
          </Button>
          <Button variant="liquid-glass" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Dashboard Mockup Bezel (Recreating the meticulous thick frosted purple rim) */}
      <div className="relative z-10 mt-24 w-full max-w-[1200px] mx-auto px-2 md:px-8 mb-24">
        <div className="rounded-[40px] md:rounded-[48px] p-3 md:p-6 bg-[#4A3D73]/30 backdrop-blur-2xl border-t-[3px] border-white/20 border-l-[3px] border-r-[1px] border-b-[1px] shadow-[0_0_120px_rgba(103,41,244,0.25)]">
          
          {/* The Dashboard App Inner Wrapper */}
          <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-white w-full h-[650px] flex shadow-2xl">
            
            {/* Sidebar */}
            <div className="w-[80px] md:w-[220px] bg-white border-r border-[#E5E7EB] p-2 md:p-6 flex flex-col flex-shrink-0 z-20">
              <div className="font-extrabold text-[24px] text-[#291763] mb-10 hidden md:block tracking-tight pl-2 pt-2">Finmile</div>
              <div className="font-extrabold text-[24px] text-[#291763] mb-10 md:hidden tracking-tight text-center pt-2">F</div>
              <nav className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 cursor-pointer font-medium text-sm transition-colors">
                  <Home className="w-5 h-5" /> <span className="hidden md:block">Home</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 cursor-pointer font-medium text-sm transition-colors">
                  <ClipboardList className="w-5 h-5" /> <span className="hidden md:block">Orders</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0EEFF] text-[#6938EF] cursor-pointer font-semibold text-sm transition-colors">
                  <Map className="w-5 h-5" /> <span className="hidden md:block">Routes</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 cursor-pointer font-medium text-sm transition-colors">
                  <Truck className="w-5 h-5" /> <span className="hidden md:block">Vehicles</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 cursor-pointer font-medium text-sm transition-colors">
                  <Users className="w-5 h-5" /> <span className="hidden md:block">Users</span>
                </div>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white flex flex-col relative overflow-hidden">
              
              {/* Header Row */}
              <div className="h-[88px] border-b border-[#E5E7EB] flex items-center px-4 md:px-8 justify-between flex-shrink-0">
                <div className="flex items-center gap-4 md:gap-6">
                  <ArrowLeft className="w-5 h-5 text-[#6938EF] cursor-pointer" />
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-[#101828] text-[20px] md:text-[28px] font-bold">AM: 9:00-15:30</h2>
                    <span className="text-gray-500 text-sm font-medium hidden sm:block">North Acton</span>
                  </div>
                </div>
              </div>

              {/* Main Body below Header */}
              <div className="flex-1 p-4 md:p-8 flex flex-col overflow-hidden bg-white">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 flex-shrink-0">
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 md:p-5 border border-transparent hover:border-gray-200 transition-colors">
                    <div className="text-[13px] text-gray-500 font-semibold mb-1">Drop offs</div>
                    <div className="font-bold text-[#101828] text-xl">252/1332</div>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 md:p-5 border border-transparent hover:border-gray-200 transition-colors">
                    <div className="text-[13px] text-gray-500 font-semibold mb-1">Pickups</div>
                    <div className="font-bold text-[#101828] text-xl">20/232</div>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 md:p-5 border border-transparent hover:border-gray-200 transition-colors hidden md:block">
                    <div className="text-[13px] text-gray-500 font-semibold mb-1">Duration</div>
                    <div className="font-bold text-[#101828] text-xl">66 h 45 m</div>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 md:p-5 border border-transparent hover:border-gray-200 transition-colors hidden lg:block">
                    <div className="text-[13px] text-gray-500 font-semibold mb-1">Distance</div>
                    <div className="font-bold text-[#101828] text-xl">624 mi</div>
                  </div>
                </div>

                {/* Content Split (Lists + Map image) */}
                <div className="flex-1 flex gap-6 overflow-hidden">
                  
                  {/* Drivers List (Left Panel) */}
                  <div className="w-[360px] hidden xl:flex flex-col gap-4 overflow-y-auto pr-2 pb-4 pt-1">
                    
                    {/* Driver Card 1 */}
                    <div className="bg-white border text-left border-gray-100 rounded-[20px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] cursor-pointer hover:border-purple-200 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center font-bold text-gray-500 text-xs">
                             JW
                          </div>
                          <span className="font-semibold text-[#101828] text-[13px] tracking-tight">Jack Wolf</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[9px] font-bold uppercase tracking-wider">In transit</span>
                          <div className="flex items-center gap-1.5 cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400">Show on map</span>
                            <div className="w-6 h-3.5 bg-[#6938EF] rounded-full relative">
                              <div className="absolute right-[2px] top-[2px] w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mb-4 flex items-center gap-1.5 tracking-wide">
                        <span>8 / 74 Completed</span><span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>Distance: 54 mi</span><span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>Duration: 8h23m</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-[40px] font-extrabold text-[#6938EF] leading-none mt-[-4px]">9</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-[#101828] text-[13px]">32 Bakers Street</div>
                              <div className="text-gray-500 text-[12px] mt-0.5 font-medium">London</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-gray-800 font-extrabold text-[12px]">
                                <Clock className="w-3.5 h-3.5" /> 9:32
                              </div>
                              <div className="text-[#6938EF] text-[10px] font-bold mt-1.5 tracking-wide cursor-pointer hover:underline">Route details &rarr;</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 text-gray-400 text-[11px] font-semibold">
                            <Package className="w-3.5 h-3.5" /> 3 packages
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driver Card 2 */}
                    <div className="bg-white border text-left border-gray-100 rounded-[20px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] opacity-60">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center font-bold text-gray-500 text-xs">
                             AR
                          </div>
                          <span className="font-semibold text-[#101828] text-[13px] tracking-tight">Anna Roberts</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[9px] font-bold uppercase tracking-wider">In transit</span>
                          <div className="flex items-center gap-1.5 cursor-pointer">
                            <span className="text-[10px] font-bold text-gray-400">Show on map</span>
                            <div className="w-6 h-3.5 bg-[#6938EF] rounded-full relative">
                              <div className="absolute right-[2px] top-[2px] w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 mt-8">
                        <span className="text-[40px] font-extrabold text-[#6938EF] leading-none mt-[-4px]">6</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-[#101828] text-[13px]">15 Allen Road</div>
                              <div className="text-gray-500 text-[12px] mt-0.5 font-medium">London</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-gray-800 font-extrabold text-[12px]">
                                <Clock className="w-3.5 h-3.5" /> 9:31
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Image Render Area (Where the actual intricate map routes would go) */}
                  <div className="flex-1 bg-[#EEF2F6] rounded-[24px] border border-gray-100 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/hero-dashboard.png')" }}></div>
                    
                    {/* Placeholder text hidden if image exists */}
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-semibold text-gray-500">
                        Put `hero-dashboard.png` (the map part) in public/assets/images
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};