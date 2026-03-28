"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { track } from '@vercel/analytics';
import SEO from '@/components/SEO';

export default function ContactMePage() {
  return (
    <>
      <SEO
        title="Contact - Manaswita Sahoo"
        description="Get in touch with Manaswita Sahoo for growth marketing opportunities, collaborations, or inquiries."
        pagePath="/contact-me"
      />
      <MainLayout>
        <div className="pt-20 p-8 min-h-screen">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Manaswita
          </motion.h1>

          {/* Changed from grid to single column */}
          <div className="max-w-xl mx-auto">
            <motion.div
              className="bg-zinc-900 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-4">Feel free to reach out for growth marketing opportunities, collaborations, or just to say hello!</p>

              <div className="space-y-4">
                <Button href="https://wa.me/+917853953798" icon={<FaWhatsapp />} title="WhatsApp" />
                <Button href="mailto:manaswitasahoo5@gmail.com" icon={<FaEnvelope />} title="Email" />
                <Button href="https://www.linkedin.com/in/manaswita-sahoo-62227a1a6" icon={<FaLinkedin />} title="LinkedIn" />
                <Button href="https://www.instagram.com/" icon={<FaInstagram />} title="Instagram" />
              </div>
            </motion.div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

// Modified Button Component (icon on top)
const Button = ({ href, icon, title }: { href: string; icon: JSX.Element; title: string }) => {
  const handleClick = () => {
    track('contact_click', {
      method: title,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-full px-6 py-4 border border-gray-400 text-gray-400 rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <p className="mt-2">{title}</p>
    </a>
  );
};