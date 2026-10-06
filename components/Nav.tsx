"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Page = 'home' | 'about' | 'experience' | 'projects' | 'personal';

interface NavProps {
  theme?: 'light' | 'dark';
  activePage?: Page;
}

export function Nav({ activePage = 'home' }: NavProps) {
  const bgClass = 'bg-nav-bg text-nav-text';
  const textMutedClass = 'text-muted';

  const [currentSection, setCurrentSection] = useState<string>('Tegha');
  const [scrollProgress, setScrollProgress] = useState(0);

  const pages = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'personal', label: 'Personal' },
  ];

  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      let newSection = 'Tegha'; 
      for (const page of pages) {
        const element = document.getElementById(page.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            newSection = page.label;
          }
        }
      }
      setCurrentSection(newSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const currentY = e.targetTouches[0].clientY;
    const diff = touchStartY - currentY;

    if (Math.abs(diff) > 30) {
      const allLabels = ['Tegha', ...pages.map(p => p.label)];
      const currentIndex = allLabels.findIndex(s => s.toLowerCase() === currentSection.toLowerCase());
      
      if (diff > 0 && currentIndex < allLabels.length - 1) { // swiped up -> go next
        const nextId = currentIndex === 0 ? pages[0].id : pages[currentIndex].id;
        document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
      } else if (diff < 0 && currentIndex > 0) { // swiped down -> go prev
        if (currentIndex === 1) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(pages[currentIndex - 2].id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setTouchStartY(null);
    }
  };

  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <nav 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`flex items-center px-5 h-[53px] rounded-[28px] overflow-hidden transition-all duration-300 ${bgClass} sticky top-6 z-50 mx-auto w-max md:w-full gap-4 md:gap-0 md:justify-between`}
    >
      <Link href="/" className="flex items-center gap-[8px] flex-shrink-0">
        <Image 
          src="/assets/avatar.png" 
          alt="Tegha" 
          width={21} 
          height={21} 
          className="rounded-full object-cover w-[21px] h-[21px]"
        />
        {/* On desktop, always show 'Tegha' */}
        <span className="font-medium text-sm capitalize whitespace-nowrap hidden md:block">
          Tegha
        </span>

        {/* Mobile Animated Section Text */}
        <div className="md:hidden relative flex items-center overflow-hidden h-[21px] w-[80px]">
          <span 
            className={`font-medium text-sm capitalize whitespace-nowrap absolute transition-all duration-300 ease-out ${
              currentSection === 'Tegha' 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-[150%] opacity-0'
            }`}
          >
            Tegha
          </span>
          {pages.map(page => (
            <span 
              key={page.id}
              className={`font-medium text-sm capitalize whitespace-nowrap absolute transition-all duration-300 ease-out ${
                currentSection.toLowerCase() === page.label.toLowerCase() 
                  ? 'translate-y-0 opacity-100' 
                  : pages.findIndex(p => p.label.toLowerCase() === currentSection.toLowerCase()) > pages.findIndex(p => p.id === page.id)
                    ? '-translate-y-[150%] opacity-0'
                    : 'translate-y-[150%] opacity-0'
              }`}
            >
              {page.label}
            </span>
          ))}
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-[25px] flex-shrink-0">
        {pages.map((page) => (
          <a 
            key={page.id} 
            href={`#${page.id}`}
            className={`text-sm capitalize transition-colors hover:text-current whitespace-nowrap ${
              currentSection.toLowerCase() === page.label.toLowerCase() ? 'text-current' : textMutedClass
            }`}
          >
            {page.label}
          </a>
        ))}
      </div>

      {/* Mobile Scroll Progress Spinner */}
      <div className="flex md:hidden items-center justify-center">
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" className="transform -rotate-90">
          <circle 
            cx="12" 
            cy="12" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeOpacity="0.2" 
          />
          <circle 
            cx="12" 
            cy="12" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>
      </div>
    </nav>
  );
}
