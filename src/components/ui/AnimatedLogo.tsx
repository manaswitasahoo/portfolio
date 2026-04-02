"use client";

import { useCallback, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import netflixLogo from '@/assets/images/logo_animated.png';

type AnimatedLogoProps = {
  onAnimationComplete?: () => void;
};

export default function AnimatedLogo({ onAnimationComplete }: AnimatedLogoProps) {
  const router = useRouter();
  const [canPlay, setCanPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/netflix-intro.mp3');
    audioRef.current.load();
  }, []);

  const startIntro = useCallback(async () => {
    if (!canPlay) {
      setCanPlay(true);
      
      if (audioRef.current) {
        audioRef.current.play().catch((err: unknown) => {
          console.error("Audio play failed:", err);
          // Some browsers still block even after a click if they are super strict
          // or if the element was clicked before the audio was fully ready
        });
      }
      
      setTimeout(() => {
        onAnimationComplete?.();
        // Only redirect if not already on /browse
        if (window.location.pathname !== '/browse') {
          router.push('/browse');
        }
      }, 3000);
    }
  }, [canPlay, router, onAnimationComplete]);

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-black cursor-pointer"
      onClick={startIntro}
    >
      <p className={`text-red-500 text-sm animate-pulse mb-2 ${canPlay ? 'hidden' : ''}`}>
        Vibe Coded by
      </p>
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={netflixLogo}
          alt="Logo"
          fill
          style={{ objectFit: 'contain' }}
          className={`${canPlay ? 'animate-netflix-intro' : 'scale-100'}`}
          priority
        />
      </div>
      
      <p className={`text-red-500 text-sm animate-pulse ${canPlay ? 'hidden' : ''}`}>
        Click to continue
      </p>
    </div>
  );
}