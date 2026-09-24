import Image from 'next/image';
import Link from 'next/link';

export function BackButton({ href = '/' }: { href?: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-1 px-2 py-1 rounded-lg transition-colors hover:bg-[#E5E5E5] dark:hover:bg-[#1F1F1F] w-max"
    >
      <Image src="/assets/arrow-left.svg" alt="Back" width={12} height={12} />
      <span className="text-sm text-[#737373] tracking-wide">Back to portfolio</span>
    </Link>
  );
}
