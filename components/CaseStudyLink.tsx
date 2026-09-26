import Image from 'next/image';
import Link from 'next/link';

export function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-1 transition-colors w-max"
    >
      <span className="text-sm text-muted group-hover:text-primary transition-colors">case study</span>
      <Image src="/assets/touch-10.svg" alt="Case study" width={18} height={18} />
    </Link>
  );
}
