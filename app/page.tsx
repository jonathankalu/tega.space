import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { SocialLinks } from '@/components/SocialIcons';
import { CaseStudyLink } from '@/components/CaseStudyLink';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#0A0A0A] font-sans min-h-screen text-[#D4D4D4]">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center py-9 px-8 gap-16">
        
        {/* Nav & Header */}
        <div className="flex flex-col items-center gap-[46px] w-full">
          <Nav theme="light" activePage="home" />

          {/* Time & Availability */}
          <div className="flex items-center gap-2.5 w-full">
            <span className="text-[#525252] text-sm">9:00 PM UTC+1</span>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <Image src="/assets/avatar.png" alt="Tegha" width={48} height={48} className="rounded-lg object-cover" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[#E5E5E5] text-base">Amenah Oluwatobi Tegha</span>
                    <img src="/assets/vr-badge-dark.svg" alt="Verified Badge" style={{ width: '12.8px', height: '12.8px' }} />
                  </div>
                  <span className="text-[#737373] text-sm">Product Designer/Researcher</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-[#171717] px-2 py-1 rounded-full border border-[#0A0A0A] shadow-inner">
                <Image src="/assets/sun.svg" alt="Sun" width={17} height={17} />
              </div>
            </div>
            <p className="text-[#737373] text-sm">Currently making cool things</p>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-7 w-full">
          <h2 className="text-[#737373] text-sm font-medium">About</h2>
          <div className="flex flex-col gap-7 text-[#737373] text-sm leading-relaxed">
            <p>
              Yo, my name is Amenah Oluwatobi Tegha (call me Tegha though) i'm a 19 year old <span className="text-[#E5E5E5]">Product Designer</span> with over a year of experience, currently leveling up to become an engineer.
            </p>
            <p>
              I'm a product designer who starts with research, understanding the problem before designing the solution. I care about the full experience of a product, that is, how it looks, how it works, and how it feels, down to details like visual hierarchy and interaction design.
            </p>
            <p>
              I design, not just screens but products for companies, startups and clients that solve real world problems and actually convert, whether its Web3, AI or Fintech. Right now, i'm working on <span className="text-[#E5E5E5]">Boba AI</span> and other <span className="text-[#E5E5E5]">projects.</span>
            </p>
            <div className="flex items-center pt-2">
              <p>
                Wanna work together? reach me at <a href="mailto:tobiamenah@gmail.com" className="text-[#E5E5E5] underline">tobiamenah@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-[28px] w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#737373] text-sm">Experience</h2>
            <p className="text-[#737373] text-sm">Overview of where I've worked</p>
          </div>
          
          <div className="flex justify-between items-start w-full">
            <span className="text-[#737373] text-sm">2026 July - Now</span>
            <div className="flex flex-col gap-2 w-[319px]">
              <span className="text-[#E5E5E5] text-sm">Product/UI designer at <span className="underline">Chrine.site</span></span>
              <p className="text-[#737373] text-sm leading-relaxed">Redesigning landing pages and websites for architectural firms and studios for better visual hierarchy and overall visual design.</p>
            </div>
          </div>

          <div className="flex justify-between items-start w-full">
            <span className="text-[#737373] text-sm">2025 September - 2025 December</span>
            <div className="flex flex-col gap-2 w-[319px]">
              <span className="text-[#E5E5E5] text-sm">UI Designer at Dexcraft(now <span className="underline">Jetherverse</span>)</span>
              <p className="text-[#737373] text-sm leading-relaxed">Contributed to early stages of the studio development, with selected screens designed, before transitioning off due to school commitment.</p>
            </div>
          </div>

          <div className="flex justify-between items-start w-full">
            <span className="text-[#737373] text-sm">2025 August - 2025 September</span>
            <div className="flex flex-col gap-2 w-[319px]">
              <span className="text-[#E5E5E5] text-sm">Product designer at Bitech team</span>
              <p className="text-[#737373] text-sm leading-relaxed">Collaborated with the team on creating a solution for online business management. i worked on the main overview dashboard and customer management section</p>
            </div>
          </div>

          <div className="flex justify-between items-start w-full">
            <span className="text-[#737373] text-sm whitespace-pre-wrap">2025 mid June  -  2025   August </span>
            <div className="flex flex-col gap-2 w-[319px]">
              <span className="text-[#E5E5E5] text-sm">Product designer at Peachit</span>
              <p className="text-[#737373] text-sm leading-relaxed">Joined the core team to solve a problem in Ed-tech<br />that will make learning and education fun again.</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-7 w-full">
          <div className="flex gap-5 items-center">
            <span className="text-[#E5E5E5] text-sm cursor-pointer">Projects</span>
            <span className="text-[#737373] text-sm cursor-pointer hover:text-[#E5E5E5] transition-colors">Explorations</span>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col w-full rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative w-full h-[319px]">
                <Image src="/assets/project-1.png" alt="Boba AI" fill className="object-cover" />
              </div>
              <div className="flex justify-between items-center py-4 text-[#D4D4D4] text-sm bg-transparent group-hover:text-white transition-colors">
                <span>Boba AI - Fully Automated workflow</span>
                <CaseStudyLink href="#" />
              </div>
            </div>

            <div className="flex flex-col w-full rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative w-full h-[319px]">
                <Image src="/assets/project-2.png" alt="Metis" fill className="object-cover" />
              </div>
              <div className="flex justify-between items-center py-4 text-[#D4D4D4] text-sm bg-transparent group-hover:text-white transition-colors">
                <span>Metis - Stock App</span>
                <CaseStudyLink href="#" />
              </div>
            </div>

            <div className="flex flex-col w-full rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative w-full h-[319px]">
                <Image src="/assets/project-3.png" alt="Lux" fill className="object-cover" />
              </div>
              <div className="flex justify-between items-center py-4 text-[#D4D4D4] text-sm bg-transparent group-hover:text-white transition-colors">
                <span>Lux - studio. GenAI</span>
                <CaseStudyLink href="#" />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-7 w-full">
          <span className="text-[#737373] text-sm">Tech Stack</span>
          <div className="flex flex-wrap justify-between gap-4 w-full text-[#737373]">
            <div className="flex items-center gap-1"><Image src="/assets/tech-figma.svg" alt="Figma" width={24} height={24} /> <span className="text-sm">Figma</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-claude.svg" alt="Claude" width={24} height={24} /> <span className="text-sm">Claude</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-html.svg" alt="Html" width={24} height={24} /> <span className="text-sm">Html</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-css.svg" alt="Css" width={24} height={24} /> <span className="text-sm">Css</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-vscode.svg" alt="Vs code" width={24} height={24} /> <span className="text-sm">Vs code</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-slack.svg" alt="Slack" width={24} height={24} /> <span className="text-sm">Slack</span></div>
            <div className="flex items-center gap-1"><Image src="/assets/tech-github.svg" alt="Github" width={24} height={24} /> <span className="text-sm">Github</span></div>
          </div>
        </div>

        {/* Personal Stuff */}
        <div className="flex flex-col gap-4 w-full">
          <span className="text-[#737373] text-sm">Personal stuff ;)</span>
          
          <div className="flex flex-col gap-5 w-full">
            <span className="text-[#737373] text-sm">Music i listen to for work</span>
            
            <div className="flex justify-between items-center p-2 rounded-lg bg-[#171717] w-full">
              <div className="flex items-center gap-1 p-2.5 rounded-lg bg-[#262626]">
                <Image src="/assets/lofi-icon.png" alt="Lofi" width={40} height={40} className="rounded" />
                <div className="flex flex-col gap-1 ml-2">
                  <span className="text-[#F5F5F5] text-sm">Beats to relax/study to</span>
                  <span className="text-[#737373] text-sm">Lofi girl</span>
                </div>
              </div>
              <a href="#" className="flex items-center gap-1 text-[#737373] text-sm hover:text-[#F5F5F5] transition-colors pr-2">
                Listen on spotify
                <Image src="/assets/spotify.svg" alt="Spotify" width={15} height={15} />
              </a>
            </div>

            <div className="w-full relative h-[362px] mt-4">
              <div className="flex items-center gap-1 absolute top-1 left-1.5 z-10">
                 <span className="text-[#737373] text-sm">Fav car brand</span>
              </div>
              {/* Fake Masonry / absolute positioning for collage */}
              <img src="/assets/collage-1-59384e.png" alt="Collage" style={{ position: 'absolute', left: '0px', top: '38px', width: '87px', height: '105px', objectFit: 'cover' }} />
              <img src="/assets/collage-6-59384e.png" alt="Collage" style={{ position: 'absolute', left: '38px', top: '181px', width: '87px', height: '105px', objectFit: 'cover' }} />
              <img src="/assets/collage-2-59384e.png" alt="Collage" style={{ position: 'absolute', left: '142px', top: '70px', width: '87px', height: '105px', objectFit: 'cover' }} />
              <img src="/assets/collage-7.png" alt="Collage" style={{ position: 'absolute', left: '229px', top: '221px', width: '139px', height: '93px', objectFit: 'cover' }} />
              <img src="/assets/collage-3-59384e.png" alt="Collage" style={{ position: 'absolute', left: '267px', top: '41px', width: '87px', height: '105px', objectFit: 'cover' }} />
              <img src="/assets/collage-4-59384e.png" alt="Collage" style={{ position: 'absolute', left: '406px', top: '70px', width: '87px', height: '105px', objectFit: 'cover' }} />
              <img src="/assets/collage-5-59384e.png" alt="Collage" style={{ position: 'absolute', left: '455px', top: '221px', width: '87px', height: '105px', objectFit: 'cover' }} />
              
              <span className="absolute left-[25px] top-[306px] text-transparent bg-clip-text bg-gradient-to-b from-[#E9BE69] via-[#CD2F2B] to-[#D0AC64] text-4xl" style={{ fontFamily: 'var(--font-swanky), cursive' }}>Porsche</span>
            </div>

            <div className="flex flex-col gap-5 py-1">
              <div className="flex items-center gap-1">
                <span className="text-[#737373] text-sm">Pics</span>
              </div>
              <div className="flex gap-1 overflow-x-auto w-full scrollbar-hide">
                <Image src="/assets/pic-1.png" alt="Pic" width={132} height={190} className="object-cover flex-shrink-0 rounded-sm" />
                <Image src="/assets/pic-2.png" alt="Pic" width={169} height={190} className="object-cover flex-shrink-0 rounded-sm" />
                <Image src="/assets/pic-3.png" alt="Pic" width={132} height={190} className="object-cover flex-shrink-0 rounded-sm" />
                <Image src="/assets/pic-4.png" alt="Pic" width={132} height={190} className="object-cover flex-shrink-0 rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-7 w-full pt-16 pb-8">
          <div className="flex justify-between w-full">
            <span className="text-[#737373] text-sm">Wanna connect?</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#00D492] rounded-full"></div>
              <span className="text-[#737373] text-sm">Available</span>
            </div>
          </div>

          <SocialLinks />
          
          <div className="w-full flex justify-center py-8">
            <Image src="/assets/footer-curve.svg" alt="Curve" width={77} height={124} />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <span className="text-xs">&copy;</span>
              <span className="text-[#737373] text-sm">2026 Amenah Tegha</span>
            </div>
            <span className="text-[#737373] text-sm">Goodbyeeee :)</span>
          </div>
        </div>

      </main>
    </div>
  );
}
