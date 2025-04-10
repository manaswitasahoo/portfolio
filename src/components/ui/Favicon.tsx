"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Favicon({ url }: { url: string }) {
  const [faviconUrl, setFaviconUrl] = useState<string>('');

  useEffect(() => {
    const getFavicon = async () => {
      try {
        // const domain = new URL(url).hostname;
        setFaviconUrl(`https://www.google.com/s2/favicons?domain=${url}&sz=32`);
      } catch (error) {
        console.error('Error fetching favicon:', error);
      }
    };

    if (url && url !== '#') {
      getFavicon();
    }
  }, [url]);

  if (!faviconUrl) return null;

  return (
    <Image
      src={faviconUrl}
      alt="favicon"
      width={16}
      height={16}
      className="inline-block ml-2 align-middle"
    />
  );
}