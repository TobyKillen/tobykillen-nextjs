import { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

interface BackgroundProps {
  src: string | StaticImageData; // Accept string or StaticImageData
  children: ReactNode;
}

export default function Background({ src, children }: BackgroundProps) {
  // Handle both string URLs and StaticImageData
  const backgroundImage = typeof src === 'string' ? src : src.src;

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the resolved string URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-neutral-content">
        {children}
      </div>
    </div>
  );
}
