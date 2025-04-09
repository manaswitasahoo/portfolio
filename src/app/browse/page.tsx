"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { cn } from '@/lib/utils';
import AnimatedLogo from '../../components/ui/AnimatedLogo';
import { useEffect, useState, useRef,useCallback } from 'react';
import { Dialog } from '@headlessui/react';

type ProfileProps = {
  name: string;
  color: string;
  href: string;
};

const profiles: ProfileProps[] = [
  {
    name: "Recruiter",
    color: "bg-blue-500",
    href: "/profile/recruiter"
  },
  {
    name: "Developer",
    color: "bg-gray-500",
    href: "/profile/developer"
  },
  {
    name: "Apoorv",
    color: "bg-red-500",
    href: "#"
  }
];

// First, move LoginPopupProps and LoginPopup component before BrowsePage
type LoginPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace form with image
    const formElement = e.target as HTMLFormElement;
    formElement.style.display = 'none';
    
    const container = formElement.parentElement;
    if (container) {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'flex flex-col items-center space-y-4';
      imgDiv.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKyX04eHaqusJRkhSM4hSkZ7UAhIlEjdzrg&s" 
             alt="Identity theft is not a joke" 
             class="rounded-lg shadow-lg mb-4"
        />
        <p class="text-xl text-red-600 font-bold text-center">You're not Apoorv! Identity theft is not a joke, Jim! 🕵️‍♂️</p>
      `;
      container.appendChild(imgDiv);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
        // Reset form for next time
        formElement.style.display = 'block';
        imgDiv.remove();
      }, 3000);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-black/90 rounded-md p-8 max-w-sm w-full border border-gray-700">
          <Dialog.Title className="text-2xl font-bold text-white mb-6">Who's there?</Dialog.Title>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default function BrowsePage() {
  const [showProfiles, setShowProfiles] = useState(false);
  const [logoHeight, setLogoHeight] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  const handleLogoHeight = useCallback(() => {
    if (logoRef.current) {
      setLogoHeight(logoRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    handleLogoHeight(); // Call once after mount
    const observer = new ResizeObserver(handleLogoHeight); // Add resize observer
    observer.observe(logoRef.current!);
    const timer = setTimeout(() => {
      setShowProfiles(true);
    }, 2000); // Adjust the duration as needed

    return () => {
      clearTimeout(timer);
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [handleLogoHeight]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black" style={{ overflow: 'hidden' }}>
      <AnimatePresence>
        {!showProfiles && (
          <motion.div
            ref={logoRef} // Assign ref to get the DOM element
            className='w-full'
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: showProfiles ? 0 : 1, scale: showProfiles ? 0.8 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ height: `${logoHeight}px` }}
          >
            <AnimatedLogo />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showProfiles && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="browse-container flex flex-col justify-center items-center bg-black text-white p-4"
            style={{ height: '100vh' }}
          >
            <motion.p className="who-is-watching text-4xl md:text-5xl font-medium mb-12 text-center">
              Who's Watching?
            </motion.p>
            <motion.div
              className="profiles grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profiles.map((profile, index) => (
                <Link 
                  href={profile.href} 
                  key={profile.name}
                  onClick={(e) => {
                    if (profile.name === "Apoorv") {
                      e.preventDefault();
                      setIsLoginOpen(true);
                    }
                  }}
                >
                  <motion.div
                    className="profile-card flex flex-col items-center cursor-pointer transition-transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div
                      className={cn(
                        "rounded-md w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center text-5xl",
                        profile.color,
                        "hover:shadow-gray-500 hover:border-2 hover:border-white hover:rounded-xl"
                      )}
                    >
                      {/* Simple smiley face */}
                      <div className="relative w-full h-full">
                        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rounded-full"></div>
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full"></div>
                        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-12 h-6 border-black border-b-2 rounded-b-full"></div>
                      </div>
                    </div>
                    <h3 className="profile-name text-lg md:text-xl text-gray-300">{profile.name}</h3>
                    {profile.name === "Apoorv" && (
                      <p className="text-xs text-red-500 mt-1 italic animate-pulse">
                        Psst, try logging in
                      </p>
                    )}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
