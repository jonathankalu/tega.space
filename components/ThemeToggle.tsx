'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer hover:opacity-85 flex-shrink-0"
      style={{
        width: '32.01px',
        height: '32.01px',
        minWidth: '32.01px',
        minHeight: '32.01px',
        padding: '3.35px',
        borderRadius: '9999px',
        border: '0.8px solid',
        borderColor: isDark ? '#262626' : '#E5E5E5',
        backgroundColor: isDark ? '#171717' : '#F5F5F5',
        boxShadow: isDark
          ? '0px 3.35px 3.35px 0px rgba(0, 0, 0, 0.25), inset 0px 0.84px 2.51px 0px rgba(255, 255, 255, 0.08)'
          : '0px 3.35px 3.35px 0px rgba(115, 115, 115, 0.13), inset 0px 0.84px 2.51px 0px rgba(64, 64, 64, 0.12)',
      }}
    >
      {!mounted ? (
        <span className="w-[17px] h-[17px]" />
      ) : isDark ? (
        /* Sun Icon (shown in dark mode to switch to light) */
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.0409 8.49998C12.0409 10.456 10.4552 12.0416 8.4992 12.0416C6.54318 12.0416 4.95752 10.456 4.95752 8.49998C4.95752 6.54397 6.54318 4.95831 8.4992 4.95831C10.4552 4.95831 12.0409 6.54397 12.0409 8.49998Z"
            stroke="#A1A1A1"
            strokeWidth="1.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.58833 2.30208H8.49979M8.58797 14.6979H8.49943M14.6979 8.58854V8.5M2.30208 8.58854V8.5M12.9449 4.17986L12.8823 4.11725M4.17953 12.9448L4.11692 12.8822M12.8199 12.9452L12.8825 12.8826M4.05471 4.18002L4.11731 4.11741M8.67687 2.30208C8.67687 2.39988 8.59761 2.47917 8.49979 2.47917C8.40197 2.47917 8.3227 2.39988 8.3227 2.30208C8.3227 2.20428 8.40197 2.125 8.49979 2.125C8.59761 2.125 8.67687 2.20428 8.67687 2.30208ZM8.67652 14.6979C8.67652 14.7957 8.59725 14.875 8.49943 14.875C8.40161 14.875 8.32235 14.7957 8.32235 14.6979C8.32235 14.6001 8.40161 14.5208 8.49943 14.5208C8.59725 14.5208 8.67652 14.6001 8.67652 14.6979ZM14.6979 8.67708C14.6001 8.67708 14.5208 8.59782 14.5208 8.5C14.5208 8.40218 14.6001 8.32292 14.6979 8.32292C14.7957 8.32292 14.875 8.40218 14.875 8.5C14.875 8.59782 14.7957 8.67708 14.6979 8.67708ZM2.30208 8.67708C2.20428 8.67708 2.125 8.59782 2.125 8.5C2.125 8.40218 2.20428 8.32292 2.30208 8.32292C2.39988 8.32292 2.47917 8.40218 2.47917 8.5C2.47917 8.59782 2.39988 8.67708 2.30208 8.67708ZM13.0075 4.24247C12.9384 4.31162 12.8263 4.31162 12.7571 4.24247C12.6879 4.17332 12.6879 4.06119 12.7571 3.99204C12.8263 3.92288 12.9384 3.92288 13.0075 3.99204C13.0767 4.06119 13.0767 4.17332 13.0075 4.24247ZM4.24214 13.0074C4.17298 13.0765 4.06085 13.0765 3.9917 13.0074C3.92254 12.9383 3.92254 12.8261 3.9917 12.757C4.06085 12.6878 4.17298 12.6878 4.24214 12.757C4.31129 12.8261 4.31129 12.9383 4.24214 13.0074ZM12.7573 13.0078C12.6881 12.9386 12.6881 12.8265 12.7573 12.7574C12.8264 12.6882 12.9386 12.6882 13.0077 12.7574C13.0768 12.8265 13.0768 12.9386 13.0077 13.0078C12.9386 13.077 12.8264 13.077 12.7573 13.0078ZM3.9921 4.24263C3.92294 4.17347 3.92294 4.06135 3.9921 3.9922C4.06125 3.92304 4.17337 3.92304 4.24253 3.9922C4.31168 4.06135 4.31168 4.17347 4.24253 4.24263C4.17337 4.31178 4.06125 4.31178 3.9921 4.24263Z"
            stroke="#A1A1A1"
            strokeWidth="1.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Moon Icon (shown in light mode to switch to dark) */
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M15.2288 9.97218C14.3791 10.4259 13.4085 10.6831 12.3779 10.6831C9.03029 10.6831 6.31653 7.96937 6.31653 4.62175C6.31653 3.59113 6.57375 2.62059 7.0275 1.77081C4.01426 2.47701 1.77051 5.18153 1.77051 8.41009C1.77051 12.1762 4.82349 15.2291 8.58956 15.2291C11.8181 15.2291 14.5226 12.9854 15.2288 9.97218Z"
            stroke="#A1A1A1"
            strokeWidth="1.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

