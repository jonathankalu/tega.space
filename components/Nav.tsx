import Image from 'next/image';
import Link from 'next/link';

type Page = 'home' | 'about' | 'experience' | 'projects' | 'personal';

interface NavProps {
  theme?: 'light' | 'dark';
  activePage?: Page;
}

export function Nav({ theme = 'light', activePage = 'home' }: NavProps) {
  const isDark = theme === 'dark';
  
  // theme="light" means the Nav pill itself is light colored (for dark backgrounds)
  // theme="dark" means the Nav pill itself is dark colored (for light backgrounds)
  
  const bgClass = isDark ? 'bg-[#171717] text-[#D4D4D4]' : 'bg-[#F5F5F5] text-[#262626]';
  const textMutedClass = isDark ? 'text-[#A1A1A1]' : 'text-[#737373]';
  const shadowClass = isDark ? 'shadow-[0_11px_9.7px_rgba(141,141,141,0.25)]' : '';

  const pages = [
    { id: 'about', label: 'About', icon: '/assets/nav-icon-0.svg' },
    { id: 'experience', label: 'Experience', icon: '/assets/nav-icon-25.svg' },
    { id: 'projects', label: 'Projects', icon: '/assets/nav-icon-50.svg' },
    { id: 'personal', label: 'Personal', icon: '/assets/nav-icon-100.svg' },
  ];

  const activePageData = pages.find(p => p.id === activePage);

  return (
    <nav className={`flex items-center px-5 py-4 rounded-[28px] w-max transition-all duration-300 ${bgClass} ${shadowClass}`}>
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
        <div className="flex items-center gap-[25px]">
          {pages.map((page) => (
            <Link 
              key={page.id} 
              href={`/${page.id}`}
              className={`text-sm capitalize transition-colors hover:text-current ${textMutedClass}`}
            >
              {page.label}
            </Link>
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
