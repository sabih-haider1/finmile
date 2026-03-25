import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Finmile - AI-Driven Logistics',
  description: 'Get in touch with the Finmile team to learn how our AI-powered OS can transform your logistics and delivery operations.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0616] flex flex-col">
      <Header />

      <div>
        <PageHero
          title="Contact" hideLogo={false}
        />

        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
