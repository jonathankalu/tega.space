"use client";

import { useState } from "react";
import Image from "next/image";
import { CaseStudyLink } from "./CaseStudyLink";

export function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<"projects" | "explorations">("projects");

  return (
    <div id="projects" className="flex flex-col gap-7 w-full scroll-mt-24">
      {/* Tabs */}
      <div className="flex gap-5 items-center">
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => setActiveTab("projects")}
        >
          {activeTab === "projects" ? (
            <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] flex-shrink-0 bg-primary rounded-full"></div>
          ) : (
            <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] flex-shrink-0 bg-transparent group-hover:bg-primary/50 rounded-full transition-colors"></div>
          )}
          <span className={`text-sm transition-colors ${activeTab === 'projects' ? 'text-primary' : 'text-muted group-hover:text-primary'}`}>Projects</span>
        </div>
        
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => setActiveTab("explorations")}
        >
          {activeTab === "explorations" ? (
            <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] flex-shrink-0 bg-primary rounded-full"></div>
          ) : (
            <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] flex-shrink-0 bg-transparent group-hover:bg-primary/50 rounded-full transition-colors"></div>
          )}
          <span className={`text-sm transition-colors ${activeTab === 'explorations' ? 'text-primary' : 'text-muted group-hover:text-primary'}`}>Explorations</span>
        </div>
      </div>

      {/* Projects Content */}
      <div className={`flex-col gap-4 w-full transition-opacity duration-300 ${activeTab === "projects" ? "flex opacity-100" : "hidden opacity-0"}`}>
        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[496px] rounded-[8px] overflow-hidden">
            <Image src="/assets/PR-1.png" alt="Boba AI" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span className="whitespace-pre-wrap">Boba AI  -  Fully Automated workflow</span>
            <CaseStudyLink href="#" />
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[496px] rounded-[8px] overflow-hidden">
            <Image src="/assets/PR-2.png" alt="Metis" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span className="whitespace-pre-wrap">Metis  -  Stock App</span>
            <CaseStudyLink href="#" />
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[496px] rounded-[8px] overflow-hidden">
            <Image src="/assets/PR-3.png" alt="Lux" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span>Lux - studio. GenAI</span>
            <CaseStudyLink href="#" />
          </div>
        </div>
      </div>

      {/* Explorations Content */}
      <div className={`flex-col gap-4 w-full transition-opacity duration-300 ${activeTab === "explorations" ? "flex opacity-100" : "hidden opacity-0"}`}>
        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[424px] rounded-[8px] overflow-hidden">
            <Image src="/assets/EX1.png" alt="Arc AI" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span className="whitespace-pre-wrap">Arc AI  -  Build apps with AI</span>
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[382px] rounded-[8px] overflow-hidden">
            <Image src="/assets/EX2.png" alt="Northline" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span className="whitespace-pre-wrap">Northline - Architecture studio</span>
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[569px] md:mx-auto group cursor-pointer">
          <div className="relative w-full h-[319px] md:h-[319px] rounded-[8px] overflow-hidden">
            <Image src="/assets/EX3.png" alt="Dream" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-center py-4 text-muted text-sm bg-transparent group-hover:text-primary transition-colors">
            <span className="whitespace-pre-wrap">Dream - Agentic design tool</span>
            <CaseStudyLink href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
