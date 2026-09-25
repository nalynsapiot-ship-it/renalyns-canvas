import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

import portraitAsset from "../assets/renalyn-photo.jpg.asset.json";
import thriftImage from "../assets/project-thrift.jpg";
import parkingImage from "../assets/project-parking.jpg";
import hourHubImage from "../assets/project-hourhub.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renalyn Gonzaga — Information Systems & Full Stack Development" },
      { name: "description", content: "Explore the projects and skills of Renalyn Gonzaga, an Information Systems student and aspiring Full Stack Developer." },
      { property: "og:title", content: "Renalyn Gonzaga — Developer Portfolio" },
      { property: "og:description", content: "Practical digital solutions, thoughtful systems, and user-centered development by Renalyn Gonzaga." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["Home", "About", "Projects", "Contact"];
const skills = [
  { name: "HTML", note: "Semantic & accessible", icon: Braces },
  { name: "CSS", note: "Responsive interfaces", icon: Sparkles },
  { name: "Python", note: "Logic & automation", icon: Code2 },
  { name: "Excel", note: "Data & reporting", icon: Database },
  { name: "Networking", note: "Systems & connectivity", icon: Network },
];
const projects = [
  {
    number: "01",
    title: "E-Commerce Automation Website for Daring Darling Thrift Clothing Shop",
    description: "A web-based platform designed to streamline product management, customer engagement, and online sales operations for a thrift clothing business.",
    image: thriftImage,
    tags: ["E-Commerce", "Automation", "Web Development"],
  },
  {
    number: "02",
    title: "PARADA Parking System",
    description: "A parking management system that improves vehicle registration, monitoring, and administrative workflows through digital automation.",
    image: parkingImage,
    tags: ["System Design", "Database", "Automation"],
  },
  {
    number: "03",
    title: "HourHub: Automated Time Keeping and Payroll App",
    description: "A workforce management application that automates employee attendance tracking, payroll computation, and reporting processes.",
    image: hourHubImage,
    tags: ["Workforce Tech", "Payroll", "Reporting"],
  },
];
const contactLinks = [
  { label: "nalynsapiot@gmail.com", shortLabel: "Email", icon: Mail, href: "mailto:nalynsapiot@gmail.com" },
  { label: "Facebook", shortLabel: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1FB5SCVcMj/?mibextid=wwXIfr" },
  { label: "GitHub", shortLabel: "GitHub", icon: Github, href: "#contact" },
  { label: "LinkedIn", shortLabel: "LinkedIn", icon: Linkedin, href: "#contact" },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 450);
    const root = rootRef.current;
    if (!root) return () => window.clearTimeout(timer);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    root.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className={`loader ${loaded ? "loader-done" : ""}`} aria-hidden="true"><span>RG</span></div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#home" aria-label="Renalyn Gonzaga, home" className="font-display text-xl font-extrabold tracking-normal">RG<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm font-medium text-muted-foreground">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/renalyn-gonzaga-resume.pdf" download className="btn-primary hidden sm:inline-flex"><Download size={16} /> Download Resume</a>
            <button type="button" className="icon-button md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-menu border-t border-border bg-background px-5 py-5 md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-3 font-display text-lg font-bold">{item}<ChevronRight size={18} /></a>)}<a href="/renalyn-gonzaga-resume.pdf" download className="btn-primary mt-5 w-full"><Download size={16} /> Download Resume</a></nav>}
      </header>

      <main>
        <section id="home" className="hero-section relative flex min-h-[min(920px,100svh)] scroll-mt-20 items-center overflow-hidden px-5 pb-16 pt-28 md:px-10 lg:px-16">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px]">
            <div className="mb-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span>Based in the Philippines</span><span className="hidden items-center gap-2 sm:flex"><span className="status-dot" /> Open to opportunities</span>
            </div>
            <div className="relative mx-auto min-h-[460px] md:min-h-[560px]">
              <p className="hero-kicker absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap font-medium text-primary">Hello, I&apos;m</p>
              <h1 className="hero-name hero-name-top absolute inset-x-0 top-8 z-10 text-center font-display font-extrabold uppercase">Renalyn</h1>
              <div className="portrait-wrap absolute left-1/2 top-[98px] z-20 -translate-x-1/2 md:top-[120px]">
                <div className="portrait-ring" />
                <img src={portrait} alt="Professional portrait representing Renalyn Gonzaga" width={1024} height={1280} fetchPriority="high" className="h-full w-full object-cover object-top" />
                <span className="portrait-badge"><Code2 size={17} /> Building with purpose</span>
              </div>
              <h1 className="hero-name hero-name-bottom absolute inset-x-0 top-[300px] z-30 text-center font-display font-extrabold uppercase md:top-[380px]">Gonzaga</h1>
            </div>
            <div className="relative z-30 mx-auto -mt-5 grid max-w-6xl items-end gap-7 lg:grid-cols-[1fr_1.55fr_1fr]">
              <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:pb-2">Passionate about building practical digital solutions that improve business processes and user experiences.</p>
              <div className="text-center"><p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground md:text-base">Information Systems Student <span className="text-primary">/</span> Aspiring Full Stack Developer</p><div className="mt-6 flex flex-wrap justify-center gap-3"><a href="#projects" className="btn-primary">View Projects <ArrowDown size={16} /></a><a href="/renalyn-gonzaga-resume.pdf" download className="btn-outline"><Download size={16} /> Resume</a></div></div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:justify-self-end lg:pb-2">Combining technology, problem-solving, and creativity to develop modern web-based systems and applications.</p>
            </div>
          </div>
          <a href="#about" className="scroll-cue absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground md:flex">Scroll <ArrowDown size={15} /></a>
        </section>

        <section id="about" className="scroll-mt-16 bg-forest px-5 py-24 text-cream md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="reveal grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div><p className="section-label text-sage">01 / About</p><h2 className="mt-5 font-display text-5xl font-extrabold md:text-7xl">More than<br />just code<span className="text-sage">.</span></h2></div>
              <div className="lg:pt-14"><p className="max-w-3xl font-display text-2xl font-medium leading-relaxed text-cream/95 md:text-4xl">I translate real-world challenges into <span className="text-sage">thoughtful digital systems</span> that work for people.</p><p className="mt-8 max-w-2xl leading-8 text-cream/65">I am an Information Systems student with a growing passion for full-stack development, business process improvement, and technology-driven solutions. My academic projects have focused on creating systems that solve real-world problems through automation, efficient data management, and user-friendly interfaces. I continuously develop my technical skills while exploring opportunities to contribute to innovative teams and impactful projects.</p>
                <div className="mt-12 grid grid-cols-3 gap-4 border-t border-cream/15 pt-8"><div><strong className="block font-display text-3xl text-sage">03</strong><span className="mt-1 block text-xs text-cream/55">Featured systems</span></div><div><strong className="block font-display text-3xl text-sage">05</strong><span className="mt-1 block text-xs text-cream/55">Core skills</span></div><div><strong className="block font-display text-3xl text-sage">∞</strong><span className="mt-1 block text-xs text-cream/55">Curiosity</span></div></div>
              </div>
            </div>

            <div className="reveal mt-24 border-t border-cream/15 pt-12"><div className="mb-8 flex items-end justify-between"><div><p className="section-label text-sage">Capabilities</p><h3 className="mt-3 font-display text-3xl font-extrabold">My toolkit</h3></div><p className="hidden max-w-xs text-right text-sm text-cream/55 md:block">A growing technical foundation shaped by systems thinking.</p></div>
              <div className="grid gap-px overflow-hidden rounded-lg bg-cream/15 sm:grid-cols-2 lg:grid-cols-5">{skills.map(({ name, note, icon: Icon }, index) => <article key={name} className="skill-card group bg-forest p-6"><div className="mb-14 flex items-start justify-between"><Icon className="text-sage transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" size={27} /><span className="text-xs text-cream/35">0{index + 1}</span></div><h4 className="font-display text-xl font-bold">{name}</h4><p className="mt-2 text-xs text-cream/50">{note}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="reveal mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-label">02 / Selected Work</p><h2 className="mt-4 font-display text-5xl font-extrabold md:text-7xl">Featured Projects<span className="text-primary">.</span></h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">Academic work focused on useful automation, clear workflows, and better everyday experiences.</p></div>
            <div className="space-y-20">{projects.map((project, index) => <article key={project.title} className={`reveal project-row grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="project-image group relative overflow-hidden rounded-lg"><img src={project.image} alt={`${project.title} project preview`} width={1280} height={912} loading="lazy" className="aspect-[1.4/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="project-number">{project.number}</div><div className="image-sheen" /></div>
              <div className="max-w-xl"><div className="mb-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><h3 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">{project.title}</h3><p className="mt-5 leading-8 text-muted-foreground">{project.description}</p><a href="#contact" className="project-link mt-8 inline-flex items-center gap-2 font-semibold">Discuss this project <ArrowUpRight size={18} /></a></div>
            </article>)}</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-secondary px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="reveal grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div><p className="section-label">03 / Contact</p><h2 className="mt-4 font-display text-5xl font-extrabold md:text-7xl">Let&apos;s<br />Connect<span className="text-primary">.</span></h2><p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">I am currently looking for internship opportunities and entry-level roles where I can grow as a developer and contribute to meaningful projects.</p>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">{contactLinks.map(({ label, shortLabel, icon: Icon, href }) => <a key={shortLabel} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="contact-link"><Icon size={19} /><span className="min-w-0 truncate">{label}</span><ExternalLink className="ml-auto shrink-0 opacity-40" size={14} /></a>)}</div>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">GitHub and LinkedIn links are ready for Renalyn&apos;s profile URLs.</p>
              </div>
              <form id="contact-form" onSubmit={submitForm} className="glass-form rounded-lg p-6 md:p-9"><div className="grid gap-6 sm:grid-cols-2"><label className="field-label">Name<input required name="name" autoComplete="name" placeholder="Your name" className="field" /></label><label className="field-label">Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="field" /></label></div><label className="field-label mt-6">Message<textarea required name="message" rows={6} placeholder="Tell me about the opportunity or project..." className="field resize-none" /></label><button className="btn-primary mt-7 w-full sm:w-auto" type="submit">{sent ? <><Check size={17} /> Message ready</> : <><Send size={17} /> Send Message</>}</button>{sent && <p role="status" className="mt-4 text-sm text-primary">Thanks — your message has been captured in this preview.</p>}</form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest px-5 py-8 text-cream md:px-10 lg:px-16"><div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><a href="#home" className="font-display text-xl font-extrabold">RG<span className="text-sage">.</span></a><p className="text-xs text-cream/55">© 2026 Renalyn Gonzaga. All Rights Reserved.</p><a href="#home" aria-label="Back to top" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream/70 transition-colors hover:text-sage">Back to top <ArrowUpRight size={15} /></a></div></footer>
    </div>
  );
}