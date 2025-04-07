"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaPlay, FaLinkedin, FaGithub } from 'react-icons/fa';

type ProfileBannerProps = {
  className?: string;
  backgroundImage?: string;
};

export function ProfileBanner({ className, backgroundImage }: ProfileBannerProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const bannerStyle = {
    // backgroundColor: isDarkMode ? 'gray-800' : 'white', // Dynamic background color
    padding: '2rem',
    borderRadius: '1rem',
    marginLeft: '1rem',
    width: '90%'
  };

  return (
    <div
      className={cn(
        "profile-banner relative w-full min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat",
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
          "banner-content relative z-10 w-3/4 mx-auto px-4 md:px-8 pt-16 md:pt-0"
        )}
        style={bannerStyle}
      >
        <motion.h1
          id="headline"
          className="banner-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3/4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         <span className= 'underline'> Apoorv Abhishek </span> <br></br>
          <span className='text-xl'>Product Manager | Restauranteur | Vibe Coder</span>
        </motion.h1>

        <motion.p
          className="banner-description text-gray-200 text-base md:text-lg mb-8 max-w-3/4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experienced Product Manager with a strong background in backend development and a hands-on
          approach. <br></br>I have driven success across sectors including real estate, AI-driven B2B SaaS, e-commerce, influencer
          marketing, and cloud kitchens. I leverage cutting-edge technologies like LLMs and Agentic AI to craft innovative,
          data-driven strategies. In November 2024, I launched <a href="https://links.sauci.in">Sauci</a>, a cloud kitchen where I manage daily operations,
          marketing, hiring, and expansion—gaining harsh but valuable industry insights every single day.
        </motion.p>

        <motion.div
          className="banner-buttons flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Existing buttons */}
          <a 
            href="https://docs.google.com/document/d/1HkDCeBy6N7mrUgJAJ5Gxm7MGYNqA04kA/edit?usp=sharing&ouid=103884992942385089784&rtpof=true&sd=true" 
            target="_blank" 
            className="play-button flex items-center bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition-colors"
          >
            <FaPlay className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label text-lg font-medium">Resume</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/apoorv-abhishek-a9a083144/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="more-info-button flex items-center bg-gray-600/70 text-white py-3 px-6 rounded hover:bg-gray-500/70 transition-colors"
          >
            <FaLinkedin className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label">LinkedIn</span>
          </a>

          {/* New GitHub button */}
          <a 
            href="https://github.com/apo1397" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button flex items-center bg-gray-600/70 text-white py-3 px-6 rounded hover:bg-gray-500/70 transition-colors"
          >
            <FaGithub className="h-6 w-6 mr-2" />
            <div className="spacer mr-2"></div>
            <span className="label">GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}