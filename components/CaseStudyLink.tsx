import Image from 'next/image';
import Link from 'next/link';

export function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-1 transition-colors w-max"
    >
      <span className="text-sm text-[#737373] group-hover:text-[#404040]">case study</span>
      <Image src="/assets/arrow-up-right.svg" alt="Case study" width={18} height={18} />
    </Link>
  );
}
