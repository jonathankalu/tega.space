'use client';
import { useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Note: To fully implement next-themes, we would use useTheme() here.
  };

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center bg-[#171717] rounded-full border border-[#0A0A0A] shadow-inner relative transition-all duration-300 ease-in-out cursor-pointer"
      style={{ 
        width: '56px', 
        height: '28px',
        padding: '3px',
        boxShadow: '0px 3.35px 3.35px 0px rgba(82, 82, 82, 0.08), inset 0px 0.84px 2.51px 0px rgba(161, 161, 161, 0.19)'
      }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon Area (Left) */}
      <div className="absolute left-[3px] flex items-center justify-center w-[22px] h-[22px] z-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>

      {/* Moon Icon Area (Right) */}
      <div className="absolute right-[3px] flex items-center justify-center w-[22px] h-[22px] z-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>

      {/* Toggle Thumb */}
      <div 
        className={`flex items-center justify-center w-[22px] h-[22px] bg-[#2A2A2A] rounded-full transition-transform duration-300 ease-in-out z-10 shadow-sm`}
        style={{ transform: theme === 'dark' ? 'translateX(0)' : 'translateX(28px)' }}
      >
        {theme === 'dark' ? (
          <img src="/assets/sun.svg" alt="Sun" style={{ width: '12px', height: '12px' }} />
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </div>
    </button>
  );
}
