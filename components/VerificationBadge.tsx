'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function VerificationBadge() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <img src="/assets/vr-badge-dark.svg" alt="Verified Badge" style={{ width: '12.8px', height: '12.8px' }} />;
  }

  const badgeSrc = theme === 'light' ? '/assets/vr-badge-light.svg' : '/assets/vr-badge-dark.svg';

  return (
    <img src={badgeSrc} alt="Verified Badge" style={{ width: '12.8px', height: '12.8px' }} />
  );
}
