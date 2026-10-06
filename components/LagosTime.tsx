"use client";

import { useState, useEffect } from 'react';

const getLagosTime = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
  return `${formatted} UTC+1`;
};

export function LagosTime() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(getLagosTime());
    setMounted(true);
    const interval = setInterval(() => {
      setTime(getLagosTime());
    }, 60000); 
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Return completely transparent text of the exact same size to prevent layout shifts
    // while remaining completely invisible until the real time loads.
    return <span className="text-transparent text-sm select-none">00:00 PM UTC+1</span>;
  }

  return <span className="text-muted text-sm">{time}</span>;
}
