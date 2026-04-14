import React from 'react';

export const DeliverySoftwareSectors = () => {
    return (
        <section className="w-full bg-[#FAFAFF] py-14 md:py-20 px-4 md:px-6 flex justify-center">
            <div className="w-full max-w-[1240px]">
                <div className="text-center max-w-[900px] mx-auto mb-10 md:mb-12">
                    <h2 className="font-bold text-[32px] md:text-[44px] text-[#2F1C8C] tracking-tight leading-[1.1] mb-4 text-balance">
                        Tailored Solutions for Every Automotive Stakeholder
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                        <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Parts Distributors</h3>
                        <p className="text-[#64748B] text-[15px] leading-[1.6]">
                            Scalable software to manage high-volume daily deliveries to local mechanics and national retailers.
                        </p>
                    </div>

                    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                        <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Dealership Groups</h3>
                        <p className="text-[#64748B] text-[15px] leading-[1.6]">
                            Synchronize parts transfers between multiple locations and manage customer vehicle pickups.
                        </p>
                    </div>

                    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EEF2FF] shadow-[0_4px_24px_rgba(47,28,140,0.04)]">
                        <h3 className="font-bold text-[20px] text-[#2F1C8C] mb-3">For Roadside Assistance &amp; Towing</h3>
                        <p className="text-[#64748B] text-[15px] leading-[1.6]">
                            High-speed dispatching for emergency recovery and repossession services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
