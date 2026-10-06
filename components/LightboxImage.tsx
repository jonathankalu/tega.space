"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function LightboxImage({ src, alt, className, style }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className || ""} cursor-pointer hover:opacity-80 transition-opacity`}
        style={style}
        onClick={() => setIsOpen(true)}
      />
      {mounted && isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{
              animation: 'lightbox-bg-fade 0.3s ease-out forwards',
            }}
            onClick={() => setIsOpen(false)}
          >
            <style>{`
              @keyframes lightbox-bg-fade {
                from { background-color: transparent; backdrop-filter: blur(0px); }
                to { background-color: rgba(0,0,0,0.4); backdrop-filter: blur(24px); }
              }
              @keyframes lightbox-img-float {
                from { opacity: 0; transform: scale(0.9) translateY(20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4">
               <img
                 src={src}
                 alt={alt}
                 className="max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                 style={{ animation: 'lightbox-img-float 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
                 onClick={(e) => e.stopPropagation()}
               />
               <button
                 className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-1.5 transition-colors"
                 onClick={() => setIsOpen(false)}
                 aria-label="Close lightbox"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
