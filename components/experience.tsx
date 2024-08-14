"use client"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

interface ExperienceItem {
  yearFrom: number;
  yearTo: number | string;
  position: string;
  website: string;
  company: string;
  description: string;
  technologies: string[];
  projectLinks?: {
    link: string;
    name: string;
  }[];
}

const items: ExperienceItem[] = [
  {
    yearFrom: 2018,
    yearTo: 2024,
    position: "Frontend Engineer",
    company: "Future Tranz. Solution Inc.",
    website: "",
    description: `
    Build and maintain components. Work closely with cross-functional teams, including developers, designers, and
    product managers, to design and implement best practices in web developement. Additionally, I focused on 
    building user interfaces, conducting thorough testing and debugging to deliver high-quality, efficient web pages. 
    My contributions were key to several successful projects, including a CRM interface and a sales and inventory 
    management system, which were well-received for their functionality and design alignment.
    `,
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Vue",
      "Vuex",
      "Bootstrap Vue",
      "Material UI",
      "Redux",
      "Redux Toolkit",
      "Jotai",
      "Ant Design UI",
      "Styled Components",
      "Auth0"
    ],
    projectLinks: [
      {
        name: "Dealer Owned CRM",
        link: "https://crm.machaik.net/"
      },
      {
        name: "HLM Pharmaceutical (Sales and Inventory)",
        link: "https://hlm-app.ftsi.dev/",
      },
      {
        name: "Vendor Portal",
        link: "https://vendor-portal.machaik.net/"
      },
      {
        name: "Campaign Tool",
        link: "http://itooltest.mhdevteam.com:8085/"
      }
    ]
  },
  {
    yearFrom: 2022,
    yearTo: 2022,
    position: "UI Engineer",
    company: "Pycon Org.",
    website: "https://pycon.org/",
    description: `
    Collaborated closely with the designer and other engineers, interpret design mockups, design websites for 
    organization in the community.
    `,
    technologies: ["JavaScript", "HTML & SCSS", "React"],
    projectLinks: [
      {
        link: "https://pycon.asia/",
        name: "PyCon Asia",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-customViolet-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {items.map((item, indx: number) => (
            <li key={indx} className="mb-12">
              <div className="experience-item group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2018 to 2024"
                >
                  {`${item.yearFrom} — ${item.yearTo}`}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href={item.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${item.position} at ${item.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {item.position} ·{" "}
                          <span className="inline-block">
                            {item.company}
                            <ArrowUpRightIcon className="arrow-up-right-icon" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {item.description}
                  </p>
                  {item.projectLinks ? (
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Related links"
                    >
                      {item.projectLinks.map((project) => (
                        <li key={project.name} className="mr-4">
                          <a
                            href={project.link}
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            target="_blank"
                          >
                            <LinkIcon className="mr-1 h-3 w-3" />
                            <span>{project.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {item.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="technology-item">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full&nbsp;
              <span className="inline-block">
                Resume
                <ArrowUpRightIcon className="arrow-up-right-icon" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
