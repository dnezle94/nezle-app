export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          As a passionate and skilled Front-End Developer with over 5 years of experience, I specialize in creating user-centric web 
          applications and interfaces. My expertise spans HTML, CSS, and JavaScript, as well as modern front-end frameworks like React 
          and Vue. I am adept at translating design mockups into fully functional web pages, ensuring they are visually appealing and 
          optimized for performance.
        </p>
        <p>
          I possess a strong understanding of responsive design principles, cross-browser compatibility, and web accessibility standards. 
          My focus is on delivering seamless user experiences across all devices and browsers, while adhering to best practices in 
          accessibility to ensure inclusivity. This blend of technical skills and user-focused design enables me to contribute 
          effectively to diverse and dynamic web projects.
        </p>
      </div>
    </section>
  );
}
