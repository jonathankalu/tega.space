import Image from 'next/image';
import Link from 'next/link';

type SocialPlatform = 'x' | 'discord' | 'whatsapp' | 'instagram' | 'threads' | 'linkedin';

interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
}

export function SocialIcon({ platform, href }: SocialIconProps) {
  return (
    <Link href={href} className="group relative block w-6 h-6" target="_blank" rel="noopener noreferrer">
      <Image 
        src={`/assets/${platform}-default.svg`} 
        alt={platform} 
        width={24} 
        height={24} 
        className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
      />
      <Image 
        src={`/assets/${platform}-active.svg`} 
        alt={platform} 
        width={24} 
        height={24} 
        className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
      />
    </Link>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon platform="x" href="https://x.com" />
      <SocialIcon platform="discord" href="https://discord.com" />
      <SocialIcon platform="whatsapp" href="https://whatsapp.com" />
      <SocialIcon platform="instagram" href="https://instagram.com" />
      <SocialIcon platform="threads" href="https://threads.net" />
      <SocialIcon platform="linkedin" href="https://linkedin.com" />
    </div>
  );
}
