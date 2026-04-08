'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Loader2, CheckCircle2, Package } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '../../lib/validation';
import { Button } from '../ui/Button';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        void data;
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section className={`${montserrat.className} py-12 px-6 bg-white overflow-hidden text-[#1E1B4B]`}>

            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 lg:gap-16 mb-12">
                    {/* Left Column: Get In Touch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col pt-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2F1C8C] mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-[#64748B] text-base leading-relaxed max-w-[500px] mb-8">
                            Get in touch with our team to discover how our AI-powered platform can revolutionize your delivery operations. Cut costs by up to 30%, optimize routes in real-time, and transform your logistics efficiency.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center border border-[#F1F5F9]">
                                    <Mail className="w-6 h-6 text-[#7C3AED]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-[#1E1B4B]">Email</span>
                                    <a href="mailto:new@finmile.co" className="text-[#64748B] hover:text-[#7C3AED] transition-colors">new@finmile.co</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#F8F9FF] rounded-[40px] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)]"
                    >
                        {isSuccess ? (
                            <div className="py-12 flex flex-col items-center text-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2">Message Sent!</h3>
                                    <p className="text-[#64748B]">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-4"
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#2F1C8C] mb-3">Request A Demo?</h3>
                                    <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                                        Talk to our team about Finmile's platform, integrations, and how we can optimize your delivery operations.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-xs font-bold text-black uppercase tracking-wider">First Name</label>
                                        <input
                                            {...register('firstName')}
                                            id="firstName"
                                            className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 transition-all"
                                        />
                                        {errors.firstName && <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-xs font-bold text-black uppercase tracking-wider">Last Name</label>
                                        <input
                                            {...register('lastName')}
                                            id="lastName"
                                            className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 transition-all"
                                        />
                                        {errors.lastName && <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.lastName.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-black uppercase tracking-wider">Work Email *</label>
                                        <input
                                            {...register('email')}
                                            id="email"
                                            className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 transition-all"
                                        />
                                        {errors.email && <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-xs font-bold text-black uppercase tracking-wider">Company Name*</label>
                                        <input
                                            {...register('companyName')}
                                            id="companyName"
                                            className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 transition-all"
                                        />
                                        {errors.companyName && <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.companyName.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-bold text-black uppercase tracking-wider">Subject</label>
                                    <input
                                        {...register('subject')}
                                        id="subject"
                                        className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-black uppercase tracking-wider">How may we help you? *</label>
                                    <textarea
                                        {...register('message')}
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl px-5 py-3.5 text-[#1E1B4B] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]/30 resize-none transition-all"
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.message.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 bg-[#2F1C8C] hover:bg-[#581FB1] transition-all rounded-full !w-full"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Requesting...
                                        </>
                                    ) : 'Request a Demo'}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Bottom Section: Track a Parcel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-[700px] mx-auto bg-[#F8F9FF] rounded-[40px] p-8 text-center"
                >
                    <div className="inline-flex w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] items-center justify-center border border-[#F1F5F9] mb-4">
                        <Package className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2A1B54] mb-2">Track a Parcel?</h3>
                    <p className="text-[#64748B] text-base max-w-[500px] mx-auto mb-6">
                        Looking for a delivery update? Track your parcel status in real time using your tracking ID.
                    </p>
                    <Button
                        variant="solid"
                        className="h-12 bg-[#2F1C8C] hover:bg-[#581FB1] rounded-full px-12"
                    >
                        Fill Out the Help Form
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

