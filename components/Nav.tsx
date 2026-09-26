import Image from 'next/image';
import Link from 'next/link';

type Page = 'home' | 'about' | 'experience' | 'projects' | 'personal';

interface NavProps {
  theme?: 'light' | 'dark';
  activePage?: Page;
}

export function Nav({ activePage = 'home' }: NavProps) {
  const bgClass = 'bg-nav-bg text-nav-text';
  const textMutedClass = 'text-muted';
  const shadowClass = 'shadow-[0_11px_9.7px_rgba(141,141,141,0.25)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.5)]';

  const pages = [
    { id: 'about', label: 'About', icon: '/assets/nav-icon-0.svg' },
    { id: 'experience', label: 'Experience', icon: '/assets/nav-icon-25.svg' },
    { id: 'projects', label: 'Projects', icon: '/assets/nav-icon-50.svg' },
    { id: 'personal', label: 'Personal', icon: '/assets/nav-icon-100.svg' },
  ];

  const activePageData = pages.find(p => p.id === activePage);

  return (
    <nav className={`flex items-center px-4 md:px-5 py-3 md:py-4 rounded-[28px] w-max max-w-full overflow-x-auto scrollbar-hide transition-all duration-300 ${bgClass} ${shadowClass}`}>
      <Link href="/" className={`flex items-center gap-2 ${activePage === 'home' ? 'mr-8' : 'mr-4'}`}>
        <Image 
          src="/assets/avatar.png" 
          alt="Tegha" 
          width={21} 
          height={21} 
          className="rounded-full object-cover w-[21px] h-[21px]"
        />
        {activePage === 'home' && (
          <span className="font-medium text-sm capitalize">Tegha</span>
        )}
      </Link>

      {activePage === 'home' ? (
        <div className="flex items-center gap-4 md:gap-[25px]">
          {pages.map((page) => (
            <a 
              key={page.id} 
              href={`#${page.id}`}
              className={`text-sm capitalize transition-colors hover:text-current ${textMutedClass}`}
            >
              {page.label}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm capitalize">{activePageData?.label}</span>
          {activePageData && (
            <Image 
              src={activePageData.icon} 
              alt={activePageData.label} 
              width={23} 
              height={23} 
            />
          )}
        </div>
      )}
    </nav>
  );
}
