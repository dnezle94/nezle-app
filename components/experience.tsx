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
  responsibilities: string[];
  projectLinks?: {
    link: string;
    name: string;
  }[];
}

const items: ExperienceItem[] = [
  {
    yearFrom: 2018,
    yearTo: 2026,
    position: "Frontend Engineer",
    company: "DevXSupport Services (formerly Future Tranz Solution Inc.)",
    website: "",
    description: `
    Frontend Engineer with extensive experience developing, modernizing, and maintaining business 
    applications using JavaScript, TypeScript, React, Vue.js, and Node.js. Worked across 
    frontend architecture, API integration, state management, workflow-driven applications, 
    reusable component systems, and application performance.
    `,
    responsibilities: [
      "Developed and maintained scalable, production-ready web applications using JavaScript, TypeScript, React, Vue.js, and Node.js across multiple business domains.",
      "Designed and implemented reusable UI components, application modules, and interactive workflows to improve consistency, maintainability, and development efficiency.",
      "Integrated REST APIs, transforming, validating, and managing JSON data from multiple backend services.",
      "Implemented complex client-side state management using Redux Toolkit, Redux, Vuex, and Zustand, supporting data-intensive and workflow-driven applications.",
      "Developed metadata-driven and configuration-based user interfaces using structured JSON configuration to support dynamic application behavior and reusable business workflows.",
      "Collaborated with backend engineers and stakeholders to define API contracts, data requirements, application workflows, and integration strategies.",
      "Modernized and refactored existing applications and legacy codebases to improve code quality, reusability, maintainability, performance, and scalability.",
      "Investigated and resolved complex frontend, API integration, dependency, build, and runtime issues across development and production environments.",
      "Applied modern development practices using TypeScript, component-based architecture, modular design, and reusable engineering patterns.",
      "Worked with frontend frameworks and UI ecosystems including React, Next.js, Vue.js, Tailwind CSS, Material UI, Ant Design, BootstrapVue, and Styled Components.",
      "Contributed to application authentication and authorization workflows involving OAuth2, JWT, and third-party authentication services.",
      "Participated in code reviews, technical discussions, requirements analysis, documentation, and engineering standards to improve overall software quality.",
      "Optimized application performance through improvements to component rendering, state management, API usage, bundle configuration, and frontend architecture.",
      "Collaborated in Agile development environments with developers, QA engineers, product owners, and other stakeholders to deliver features and resolve technical issues.",
      "Leveraged AI-assisted development tools including GitHub Copilot, ChatGPT, and OpenAI Codex for code generation, refactoring, debugging, documentation, test development, and development workflow optimization."
    ],
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
      "Ant Design",
      "Tailwind CSS",
      "Codex",
      "Github Copilot",
      "Git",
      "GitHub",
      "Postman",
      "Styled Components",
      "Auth0",
      "REST APIs",
      "Docker",
      "Vite"
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
    yearFrom: 2024,
    yearTo: 2025,
    position: "Software Engineer",
    company: "MID-Construction Group",
    website: "https://midconstruction.com/",
    description: `
    Developed workflow-driven business applications using React and TypeScript, focusing on configurable, metadata-driven interfaces and business process automation.
    `,
    responsibilities: [
      "Developed workflow-driven business applications using React and TypeScript.",
      "Built configurable, metadata-driven interfaces powered by structured metadata and JSON-based application configurations.",
      "Integrated REST APIs and managed complex client-side state to support business process automation and dynamic workflows.",
      "Implemented event-driven UI interactions and browser-based workflows to streamline operational processes and improve user efficiency.",
      "Translated business requirements into maintainable, production-ready features in collaboration with product owners and stakeholders.",
      "Maintained technical documentation, implementation guides, and coding standards to support consistency and maintainability.",
      "Participated in Agile ceremonies, sprint planning, backlog refinement, and peer code reviews.",
      "Applied reusable frontend development patterns and TypeScript practices to improve code quality, maintainability, and scalability."
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "Metadata-Driven Applications", 
      "JSON Configuration", 
      "REST APIs", 
      "Event-Driven UI",
      "CI/CD", 
      "Material UI", 
      "TanStack", 
      "Zustand", 
      "Figma", 
      "Git", 
      "Bitbucket", 
      "Next.js", 
      "Node.js", 
      "Express"],
    projectLinks: [
      {
        name: "Projectler",
        link: "https://app.projectler.com/"
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
    responsibilities: [],
    technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Figma"],
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
                  {item.responsibilities.length > 0 && (
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Responsibilities"
                    >
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mr-1.5 mt-2 flex items-start">
                          <span className="mr-3 ml-3 mt-2 flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                          </span>
                          <p className="text-sm leading-normal text-slate-400">
                            {resp}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

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
