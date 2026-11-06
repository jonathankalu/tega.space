'use client';

import Image from 'next/image';
import Link from 'next/link';

const SECTIONS = [
  { id: 'overview', name: 'Overview' },
  { id: 'onboarding', name: 'Onboarding' },
  { id: 'home-page', name: 'Home page' },
  { id: 'workflow', name: 'Workflow' },
  { id: 'integrations', name: 'Integrations' },
  { id: 'collaboration', name: 'Collaboration' },
  { id: 'final-thoughts', name: 'Final Thoughts' },
  { id: 'footer', name: 'Portfolio' },
];

function StepIndicator({ activeIndex }: { activeIndex: number }) {
  const scrollTo = (index: number) => {
    // If clicking current active bar, advance to next section
    const targetIndex = index === activeIndex ? (index + 1) % SECTIONS.length : index;
    const target = SECTIONS[targetIndex];
    const element = document.getElementById(target.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="flex items-end gap-[19px] h-8 pb-1"
      aria-label="Screens navigator"
    >
      {SECTIONS.map((section, index) => {
        const isCurrent = index === activeIndex;
        const isCompleted = index < activeIndex;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Jump to ${section.name}`}
            title={`${section.name} (Screen ${index + 1} of ${SECTIONS.length})`}
            className="group/indicator flex items-end h-8 px-[3px] py-0 cursor-pointer focus:outline-none transition-transform hover:scale-110"
          >
            <div
              className={`w-[1px] transition-all duration-300 ${
                isCurrent
                  ? 'h-8 bg-indicator-active'
                  : isCompleted
                  ? 'h-4 bg-indicator-completed group-hover/indicator:h-6'
                  : 'h-4 bg-indicator-upcoming group-hover/indicator:h-6 group-hover/indicator:bg-indicator-active'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

export default function BobaAiCaseStudy() {
  return (
    <div className="flex flex-col items-center min-h-screen text-foreground bg-background transition-colors duration-300">
      <main className="flex flex-col w-full max-w-[690px] px-4 md:px-0 pt-16 md:pt-[121px] pb-[94px] gap-10">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/#projects"
            className="flex items-center gap-2 py-2 text-muted hover:text-primary transition-colors group"
          >
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path
                d="M4 1L1 5L4 9"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-normal">Back</span>
          </Link>

          <a
            href="#"
            className="flex items-center gap-2 px-2 py-1 text-muted hover:text-primary transition-colors rounded-lg"
          >
            <svg
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M0.383721 7.03488C0.383721 5.05693 1.98717 3.45349 3.96512 3.45349C5.94307 3.45349 7.54651 5.05693 7.54651 7.03488C7.54651 9.01284 5.94307 10.6163 3.96512 10.6163C1.98717 10.6163 0.383721 9.01284 0.383721 7.03488Z"
                fill="#D4D4D4"
                stroke="#737373"
                strokeWidth="0.767442"
                className="dark:fill-[#262626] dark:stroke-[#A1A1A1]"
              />
              <path
                d="M6.26744 4.22093V2.68605C6.26744 1.41451 5.23667 0.383721 3.96512 0.383721C2.69358 0.383721 1.66279 1.41451 1.66279 2.68605V4.22093"
                stroke="#737373"
                strokeWidth="0.767442"
                strokeLinecap="round"
                className="dark:stroke-[#A1A1A1]"
              />
              <path
                d="M3.00581 7.03488H2.94186M3.06977 7.03488C3.06977 7.10554 3.01252 7.16279 2.94186 7.16279C2.87122 7.16279 2.81395 7.10554 2.81395 7.03488C2.81395 6.96423 2.87122 6.90698 2.94186 6.90698C3.01252 6.90698 3.06977 6.96423 3.06977 7.03488Z"
                stroke="#737373"
                strokeWidth="0.767442"
                strokeLinecap="round"
                className="dark:stroke-[#A1A1A1]"
              />
              <path
                d="M5.05233 7.03488H4.98837M5.11628 7.03488C5.11628 7.10554 5.05903 7.16279 4.98837 7.16279C4.91772 7.16279 4.86047 7.10554 4.86047 7.03488C4.86047 6.96423 4.91772 6.90698 4.98837 6.90698C5.05903 6.90698 5.11628 6.96423 5.11628 7.03488Z"
                stroke="#737373"
                strokeWidth="0.767442"
                strokeLinecap="round"
                className="dark:stroke-[#A1A1A1]"
              />
            </svg>
            <span className="text-sm">live site</span>
          </a>
        </div>

        {/* Section 0: Overview / Hero */}
        <div id="overview" className="flex flex-col gap-6 w-full scroll-mt-20">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-3xl md:text-[32px] font-semibold text-primary tracking-[0.003em]">
              Boba Ai
            </h1>
            <p className="text-lg md:text-xl font-medium text-heading tracking-[0.002em]">
              Simple workflows. Powerful automation
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full text-base text-muted leading-relaxed">
            <p>
              The rise of Artificial Intelligence has led to almost everything we do now being so easy that it feels like a cheat. we no longer browse for hours searching for information or struggle to get it on the internet. With just a prompt we can get whatever we need.
            </p>
            <p>
              The same goes for manual operations, they’re now being automated with artificial intelligence. This is supposed to be easy with artificial intelligence, i.e. automating workflow operations. But when i was doing my research on AI automation workflow software, I didn’t find it easy to use. It felt like i needed a course just to navigate the dashboard and a Diploma to create my first workflow.
            </p>
            <p>
              So my solution to this is Boba AI.
            </p>
            <p>
              This isn’t like other traditional workflow software. Instead of giving yourself the trouble to automate your workflow, let Boba ai handle the workflow creation and management. It doesn’t matter whether you haven’t done automation or are an expert in it. Boba ai bridges the gap{' '}
              <span className="text-primary font-medium">
                between wanting something automated and knowing how to build it.
              </span>
            </p>
          </div>
        </div>

        {/* Section 1: Onboarding */}
        <div id="onboarding" className="flex flex-col gap-8 w-full pt-4 scroll-mt-20">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl font-medium text-heading">
              Onboarding
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                Traditional workflow makes onboarding feel like signing pension documents. Endless setup, forced configuration, eventually making users quit before they even get to test the product.
              </p>
              <p>
                So i decided to make Boba AI simple to go about, so that users can get on immediately to start building workflows.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-start w-full">
              <StepIndicator activeIndex={1} />
            </div>
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[449px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/boba-screen-1.png"
                alt="Boba AI - Onboarding Screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 2: Home page */}
        <div id="home-page" className="flex flex-col gap-8 w-full pt-4 scroll-mt-20">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl font-medium text-heading">
              Home page
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                After the onboarding, Users shouldn’t feel overwhelmed by the amount of icons for navigation or buttons whose purpose isn’t immediately clear.
              </p>
              <p>
                Navigating the homepage should feel like a natural sequence not like a maze. users prioritize simple, focused screens over those that try to do to much at once. I want to make users know the next thing to do when they land on the home page not pausing and trying to figure out what matters.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-start w-full">
              <StepIndicator activeIndex={2} />
            </div>
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[449px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/boba-homepage.png"
                alt="Boba AI - Home page Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Workflow */}
        <div id="workflow" className="flex flex-col gap-8 w-full pt-4 scroll-mt-20">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl font-medium text-heading">
              Workflow
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                The workflow, in fact, is the main focus of Boba AI. Workflows tend to be overwhelming and confusing at start and gets even harder to maintain as it grows or expands. so i used Boba AI to simplify the process.
              </p>
              <p>
                Boba AI makes users focus on productivity and results rather than dealing with workflow management problems or manually building one from scratch.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex justify-start w-full max-w-[554px]">
              <StepIndicator activeIndex={3} />
            </div>
            <div className="relative w-full max-w-[554px] h-[240px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/boba-workflow.png"
                alt="Boba AI - Workflow Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Integrations */}
        <div id="integrations" className="flex flex-col gap-8 w-full pt-4 scroll-mt-20">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl font-medium text-heading">
              Integrations
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                Limited integration mean user can’t use tools they need for their workflow which causes real frustration and stalls productivity before a real workflow can even get started. Integrations are what bridge the gap between tools that people use and the workflows they are trying to build.
              </p>
              <p>
                But with Boba AI, users get access to a broad library of apps and software crucial for building their workflow and boosting productivity, rather than being limited to a handful of tools. And if a tool isn’t available, users can submit a request for it and will get reviewed. Each request get reviewed before getting published, that way we keep the library reliable and build trust.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex justify-start w-full max-w-[554px]">
              <StepIndicator activeIndex={4} />
            </div>
            <div className="relative w-full max-w-[554px] h-[240px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/boba-integrations.png"
                alt="Boba AI - Integrations Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Collaboration */}
        <div id="collaboration" className="flex flex-col gap-8 w-full pt-4 scroll-mt-20">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-xl font-medium text-heading">
              Collaboration
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                Workflows are rarely built alone, so Boba Ai lets multiple people and teams work together to build large and complex workflows. Each person in a team has the opportunity to add a comment on the canvas to pass information to other people in the team instead of switching to other communication tools and coming back.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex justify-start w-full max-w-[554px]">
              <StepIndicator activeIndex={5} />
            </div>
            <div className="relative w-full max-w-[554px] h-[240px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/boba-collaboration.png"
                alt="Boba AI - Collaboration Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 6: Final Thoughts */}
        <div id="final-thoughts" className="flex flex-col gap-6 w-full pt-4 scroll-mt-20">
          <h2 className="text-xl font-medium text-heading">
            Final Thoughts
          </h2>
          <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
            <p>
              This project aim was to show the possibilities of how AI can make automation workflow feel powerful, reliable and productive without sacrificing the trust for you to lend AI the access to sensitive information and tools such as Stripe, Gmail and so on. The onboarding, permission access, node editing and collaboration features for this project was to help users know that they can let AI handle all the technical troubles but still be able to see every action and and make changes so that they don’t feel like they have lost control.
            </p>
            <p>
              Thank you for your time of reading my case study, . If there was an opportunity to build Boba AI, i wouldn’t hesitate build it as a real and live product since we are solving real world problems.
            </p>
          </div>
        </div>

        {/* Section 7: Footer Navigation */}
        <div id="footer" className="flex items-center justify-between w-full pt-8 pb-4 border-t border-border scroll-mt-20">
          <Link
            href="/#projects"
            className="flex items-center gap-2 py-2 text-muted hover:text-primary transition-colors group"
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path
                d="M5 1L1 5L5 9"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-normal">Back to portfolio</span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-muted">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M7.5 4.5C7.2 4.2 6.7 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8C6.7 8 7.2 7.8 7.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span>2026 Amenah Tegha</span>
          </div>
        </div>

      </main>
    </div>
  );
}
