"use client";

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaPlay, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { track } from '@vercel/analytics';

type ProfileBannerProps = {
  className?: string;
  backgroundImage?: string;
};

export function ProfileBanner({ className, backgroundImage }: ProfileBannerProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isExpanded, setIsExpanded] = useState(false);

  const bannerStyle = {
    // backgroundColor: isDarkMode ? 'gray-800' : 'white', // Dynamic background color
    padding: '2rem',
    borderRadius: '1rem',
    marginLeft: '1rem',
    width: '90%'
  };

  const handleLinkClick = (linkType: string) => {
    track('profile_link_click', {
      type: linkType,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div
      className={cn(
        "profile-banner relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage || "https://ext.same-assets.com/2325684012/2846338995.gif"})`
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Banner Content */}
      <div
        className={cn(
          "banner-content relative z-10 w-full md:w-[85%] mx-auto px-4 md:px-8 pt-24 md:pt-0"
        )}
        style={bannerStyle}
      >
        <motion.h1
          id="headline"
          className="banner-headline text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 max-w-full md:max-w-3/4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="underline">Manaswita Sahoo</span> <br />
          <span className="text-lg md:text-xl leading-0.5">Growth Marketing Professional | Brand Partnerships | Data-Driven Growth</span>
        </motion.h1>

        <motion.div
          className="banner-description text-gray-200 text-sm md:text-lg mb-6 md:mb-8 max-w-full md:max-w-3/4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="md:hidden">
            {!isExpanded ? (
              <>
                Growth marketing professional with expertise in Meta Ads, Google Ads, CRM, and brand partnerships. Currently driving growth at Aurm through data-driven strategies.
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-red-500 ml-2 underline"
                >
                  Read More
                </button>
              </>
            ) : (
              <>
                Growth marketing professional with a strong track record in performance marketing, brand partnerships, and retention marketing. Reduced CPL by 34% and CAC by 45% at Aurm. Previously scaled ad spend from ₹2Cr to ₹8.4Cr/month at Kapiva (320% growth) and drove loyalty program success at Rapido. MBA in Marketing from KIIT School of Management.
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-red-500 block mt-2 underline"
                >
                  Read Less
                </button>
              </>
            )}
          </p>
          <p className="hidden md:block">
            Growth marketing professional with a strong track record in performance marketing, brand partnerships, and retention marketing. Reduced CPL by 34% and CAC by 45% at Aurm. Previously scaled ad spend from ₹2Cr to ₹8.4Cr/month at Kapiva (320% growth) and drove loyalty program success at Rapido. MBA in Marketing from KIIT School of Management. Passionate about data-driven growth, creative strategy, and building impactful brand narratives.

          </p>
        </motion.div>

        <motion.div
          className="banner-buttons flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://drive.google.com/file/d/17Qf9x8qu_A_I8kTwvBAMF3C0g7g4bZdo/view?usp=sharing" 
            target="_blank"
            onClick={() => handleLinkClick('resume')}
            className="play-button flex items-center bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition-colors"
          >
            <FaPlay className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label text-lg font-medium">Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/manaswita-sahoo-62227a1a6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick('linkedin')}
            className="more-info-button flex items-center bg-gray-600/70 text-white py-3 px-6 rounded hover:bg-gray-500/70 transition-colors"
          >
            <FaLinkedin className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label">LinkedIn</span>
          </a>

          <a
            href="mailto:manaswitasahoo5@gmail.com"
            onClick={() => handleLinkClick('email')}
            className="email-button flex items-center bg-gray-600/70 text-white py-3 px-6 rounded hover:bg-gray-500/70 transition-colors"
          >
            <FaEnvelope className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label">Email</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}