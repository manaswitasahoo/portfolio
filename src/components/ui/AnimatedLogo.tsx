"use client";

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import netflixLogo from '@/assets/images/apoorv_logo3_cropped.png';

type AnimatedLogoProps = {
  onAnimationComplete?: () => void;
};

export default function AnimatedLogo({ onAnimationComplete }: AnimatedLogoProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);

  const startIntro = useCallback(async () => {
    if (!canPlay) {
      setCanPlay(true);
      const audio = new Audio('/netflix-intro.mp3');
      audio.volume = 1.0;
      audioRef.current = audio;
      
      try {
        await audio.play();
        setTimeout(() => {
          onAnimationComplete?.();
          router.push('/browse');
        }, 3000);
      } catch (error) {
        console.error("Audio playback failed:", error);
        setTimeout(() => {
          onAnimationComplete?.();
          router.push('/browse');
        }, 3000);
      }
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