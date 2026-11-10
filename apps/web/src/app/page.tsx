"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BarChart3, BookOpen, Check, Clock3,
  GraduationCap, Menu, Play, ShieldCheck, Signal, Sparkles, TrendingUp, Users, UserRound, WalletCards, X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academy", href: "#academy" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Insights", href: "#signals" },
];

const courses = [
  { level: "BEGINNER", title: "Forex Foundations", description: "Understand currency pairs, pips, market sessions and the mechanics behind every trade.", lessons: "18 lessons", duration: "4.5 hours", price: "Free", tag: "START HERE" },
  { level: "INTERMEDIATE", title: "Price Action Mastery", description: "Read market structure, identify setups and build a repeatable trading process.", lessons: "32 lessons", duration: "8 hours", price: "Coming soon", tag: "POPULAR PATH" },
  { level: "ADVANCED", title: "Institutional Trading", description: "Explore liquidity, order flow concepts and disciplined trade execution.", lessons: "24 lessons", duration: "6 hours", price: "Coming soon", tag: "ADVANCED" },
];

const principles = [
  { icon: ShieldCheck, title: "Risk comes first", description: "Understand exposure, protect your capital and make risk part of every decision." },
  { icon: BarChart3, title: "A clear learning path", description: "Move from the foundations to more advanced concepts with structure and purpose." },
  { icon: Users, title: "Guidance that matters", description: "Learn with a community that values preparation, patience and steady improvement." },
];

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="AceFX home">
      <span className="brand-mark">A</span>
      <span className="leading-tight">
        <span className="font-display block text-[15px] font-extrabold tracking-[.12em]">ACE<span className="text-accent">FX</span></span>
        <span className="mt-1 block text-[8px] font-semibold tracking-[.25em] text-muted">TRADE WITH CLARITY</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="floating-nav-shell site-shell">
        <Brand />
        <nav className="floating-nav hidden md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="floating-nav-item">{item.label}</a>
          ))}
        </nav>
        <div className="floating-nav-actions hidden md:flex">
          <a href="/login" className="floating-nav-item">Log in</a>
          <a href="/register" className="floating-nav-cta">Get started <ArrowUpRight size={14} /></a>
        </div>
        <button type="button" className="mobile-nav-toggle md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-floating-menu md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="/login" onClick={() => setOpen(false)}>Log in</a>
          <a href="/register" onClick={() => setOpen(false)} className="mobile-menu-cta">Get started <ArrowUpRight size={14} /></a>
        </nav>
      )}
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art relative mx-auto w-full max-w-[570px]">
      <div className="hero-orbit" />
      <div className="hero-column hero-column-one" />
      <div className="hero-column hero-column-two" />
      <div className="hero-platform"><span /></div>
      <div className="hero-sphere" />
      <div className="account-card">
        <div className="flex items-center justify-between text-[10px] text-white/55"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> ACCOUNT OVERVIEW</span><span>•••</span></div>
        <p className="mt-5 text-[10px] text-white/55">YOUR TRADING JOURNEY</p>
        <div className="font-display mt-1 text-3xl font-bold tracking-tight">$ — — —</div>
        <p className="mt-1 text-[9px] text-white/40">Build skill before measuring results</p>
        <div className="mt-5 grid grid-cols-2 gap-2"><div className="rounded-lg bg-[#6556c7]/30 p-3"><TrendingUp size={16} className="text-accent" /><span className="mt-2 block text-[9px] text-white/55">LEARN</span><b className="text-xs">With purpose</b></div><div className="rounded-lg bg-white/[.06] p-3"><ShieldCheck size={16} className="text-accent" /><span className="mt-2 block text-[9px] text-white/55">MANAGE</span><b className="text-xs">Your risk</b></div></div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-white/45"><span>EDUCATIONAL PLATFORM</span><span>ACEFX</span></div>
      </div>
      <div className="floating-note"><span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent"><ShieldCheck size={18} /></span><span><b className="block text-xs">Discipline over hype</b><small className="mt-1 block text-[10px] text-muted">A process built to last</small></span></div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="site-shell relative grid min-h-[630px] items-center gap-10 py-16 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
        <div className="relative z-10 max-w-[540px]">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> BUILT FOR THE NEXT GENERATION OF TRADERS</span>
          <h1 className="font-display mt-7 text-[43px] font-extrabold leading-[1.08] tracking-[-.065em] text-white sm:text-6xl lg:text-[66px]">Turn your passion into <span className="text-accent">trading skill.</span></h1>
          <p className="mt-6 max-w-[440px] text-[14px] leading-7 text-muted">Learn the markets, sharpen your strategy and build the discipline to trade with a plan. No shortcuts. No overnight promises.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#academy" className="btn-primary">Get started <ArrowUpRight size={16} /></a><a href="#about" className="btn-ghost"><Play size={14} /> Discover AceFX</a></div>
          <p className="mt-8 text-[10px] tracking-[.14em] text-white/40">EDUCATION · MENTORSHIP · MARKET INSIGHTS</p>
        </div>
        <HeroArtwork />
      </div>
    </section>
  );
}

function TrustStrip() {
  const values = ["MARKET EDUCATION", "RISK MANAGEMENT", "TRADING COMMUNITY", "LIFELONG LEARNING"];
  return <div className="trust-strip"><div className="site-shell trust-logos">{values.map((value, i) => <div className={`trust-wordmark trust-wordmark-${i + 1}`} key={value}>{value}</div>)}</div></div>;
}

function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto mb-14 max-w-[650px] text-center" : "mb-10 max-w-[600px]"}><span className={centered ? "eyebrow justify-center" : "eyebrow"}>{eyebrow}</span><h2 className="font-display mt-5 text-3xl font-bold leading-[1.15] tracking-[-.05em] text-white sm:text-4xl md:text-[43px]">{title}</h2>{description && <p className="mt-4 text-[13px] leading-7 text-muted">{description}</p>}</div>;
}

function About() {
  return (
    <section id="about" className="section-space about-section">
      <div className="site-shell">
        <SectionHeading centered eyebrow="THE ACEFX DIFFERENCE" title={<>You've got what it takes to<br className="hidden sm:block" /> become a better trader.</>} description="The right environment makes the work clearer. Start with strong foundations, practice with intention and keep learning." />
        <div className="principle-stage">
          <article className="principle-card principle-side"><div className="illustration illustration-compass"><ShieldCheck size={49} strokeWidth={1.35} /><span /></div><h3>Risk comes first</h3><p>Learn to protect your capital and make risk part of every decision.</p></article>
          <article className="principle-card principle-featured"><div className="illustration illustration-flag"><span className="flag-pole" /><span className="flag-cloth" /><span className="flag-base" /><BarChart3 size={44} strokeWidth={1.3} /></div><h3>Structured learning</h3><p>Build a clear foundation and grow your process one lesson at a time.</p><a href="#academy" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-white">Explore the academy <ArrowRight size={14} /></a></article>
          <article className="principle-card principle-side"><div className="illustration illustration-community"><Users size={49} strokeWidth={1.35} /><span /><i /></div><h3>Guidance & community</h3><p>Find support, share ideas and keep improving with intention.</p></article>
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="section-space">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="stats-art">
          <div className="stats-mark">A</div><div className="stats-bars">{[42, 58, 76, 91, 68, 100, 83].map((h, i) => <span key={i} style={{ height: h + "%" }} />)}</div>
          <div className="stats-caption"><b>Learn. Practice. Improve.</b><span>A steady path beats a shortcut.</span></div>
        </div>
        <div>
          <SectionHeading eyebrow="THE LEARNING PATH" title="A practical foundation for the long game." description="Trading is a skill, and skills are built step by step. Explore learning paths designed around understanding, practice and risk." />
          <div className="grid grid-cols-2 gap-3"><div className="stat-tile"><b>01</b><span>Understand the market</span></div><div className="stat-tile"><b>02</b><span>Build a repeatable process</span></div></div>
          <a href="/courses" className="btn-primary mt-6">Explore courses <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="site-shell mt-16 grid gap-4 md:grid-cols-3">{courses.map((course, i) => <article key={course.title} className="course-card"><div className="flex items-center justify-between"><span className="text-[9px] font-bold tracking-[.16em] text-accent">{course.level}</span><span className="rounded-full border border-line px-3 py-1 text-[8px] text-muted">{course.tag}</span></div><div className="course-icon">{i === 0 ? <BookOpen size={21} /> : i === 1 ? <TrendingUp size={21} /> : <Sparkles size={21} />}</div><h3 className="font-display mt-5 text-xl font-bold text-white">{course.title}</h3><p className="mt-3 min-h-[66px] text-xs leading-6 text-muted">{course.description}</p><div className="mt-5 flex gap-4 border-t border-line pt-4 text-[10px] text-muted"><span className="flex items-center gap-1"><BookOpen size={12} />{course.lessons}</span><span className="flex items-center gap-1"><Clock3 size={12} />{course.duration}</span></div><div className="mt-5 flex items-center justify-between"><b className="text-xs text-white">{course.price}</b><a href="/courses" className="flex items-center gap-2 text-[11px] font-bold text-accent">Explore <ArrowUpRight size={14} /></a></div></article>)}</div>
    </section>
  );
}

function Mentorship() {
  return <section id="mentorship" className="section-space pt-4"><div className="site-shell"><div className="mentorship-panel"><div className="relative z-10 max-w-[650px]"><span className="eyebrow">PERSONAL GUIDANCE</span><h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-[-.05em] text-white sm:text-5xl">You don't have to figure it all out alone.</h2><p className="mt-5 max-w-[560px] text-sm leading-7 text-muted">Get guidance, structured feedback and a clearer path for your trading development. Learn to think through a trade, not simply follow one.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/mentorship" className="btn-primary">Explore mentorship <ArrowUpRight size={15} /></a><a href="#academy" className="btn-ghost">Explore learning</a></div></div><div className="mentorship-orbit"><GraduationCap size={76} strokeWidth={1} /></div></div></div></section>;
}

function Signals() {
  return <section id="signals" className="section-space"><div className="site-shell grid items-center gap-14 lg:grid-cols-2"><div><SectionHeading eyebrow="MARKET INSIGHTS" title="Understand the idea behind the setup." description="Explore structured market commentary and trade breakdowns that explain context, the levels being watched and the risk involved." /><ul className="space-y-4 text-[13px] text-white/80">{["Market context and technical breakdowns", "Entry idea, invalidation and risk considerations", "Educational notes with every published setup"].map((item) => <li key={item} className="flex items-center gap-3"><Check size={15} className="text-accent" />{item}</li>)}</ul><a href="/signals" className="btn-primary mt-9">Explore market insights <ArrowUpRight size={15} /></a></div><div className="market-note"><div className="flex items-center justify-between border-b border-line pb-5"><div><span className="text-[9px] font-bold tracking-[.18em] text-accent">SAMPLE MARKET NOTE</span><h3 className="font-display mt-2 text-lg font-bold">EUR/USD — Market watch</h3></div><span className="rounded-full bg-accent/10 px-3 py-1.5 text-[9px] font-bold text-accent">EDUCATIONAL</span></div><div className="grid grid-cols-2 gap-3 py-6"><div className="note-tile"><p>MARKET BIAS</p><b>Wait for confirmation</b></div><div className="note-tile"><p>TIMEFRAME</p><b>4H / 1H</b></div></div><div className="border-t border-line pt-5"><p className="text-[9px] font-bold tracking-wider text-muted">WHAT TO WATCH</p><p className="mt-2 text-xs leading-6 text-white/75">Observe how price reacts around recent structure. Avoid forcing an entry before the setup is clear.</p><div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[10px] text-muted"><span>Illustrative example only</span><span className="flex items-center gap-1 text-accent"><ShieldCheck size={12} /> Risk first</span></div></div></div></div></section>;
}

function Features() {
  const items = [
    { icon: WalletCards, title: "A clearer trading process", description: "Plan your trades, define your risk and review decisions with purpose." },
    { icon: TrendingUp, title: "Learning that compounds", description: "Build knowledge in stages, from the basics to more advanced market concepts." },
    { icon: ShieldCheck, title: "Transparent risk thinking", description: "Understand the downside before you focus on what a trade might return." },
  ];
  return (
    <section className="section-space feature-section">
      <div className="site-shell">
        <SectionHeading centered eyebrow="BUILT AROUND YOUR PROGRESS" title={<>Everything you need to grow<br className="hidden sm:block" /> with confidence.</>} description="Useful education, practical tools and a community that puts the process before the promise." />
        <div className="benefit-grid">{items.map(({icon: Icon, title, description}, i) => <article key={title} className={i === 1 ? "benefit-card benefit-featured" : "benefit-card"}><div className={`benefit-illustration benefit-illustration-${i + 1}`}><Icon size={48} strokeWidth={1.25} /></div><h3 className="font-display mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-[11px] leading-5 opacity-70">{description}</p></article>)}</div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="stories-section"><div className="site-shell stories-layout">
      <div className="stories-copy"><span className="eyebrow">THE ACEFX JOURNEY</span><h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-[-.05em] text-white sm:text-4xl">Real progress is built one decision at a time.</h2><p className="mt-4 max-w-[390px] text-xs leading-6 text-muted">Trading is a personal journey. AceFX brings learning resources, practical market context and a community together to help you keep moving forward.</p>
        <div className="story-links"><a className="story-link story-link-active" href="#academy"><span>01</span><b>Learn the foundations</b><ArrowRight size={14}/></a><a className="story-link" href="#signals"><span>02</span><b>Study market context</b><ArrowRight size={14}/></a><a className="story-link" href="#mentorship"><span>03</span><b>Get guidance and feedback</b><ArrowRight size={14}/></a></div>
      </div>
      <div className="stories-visual"><div className="story-portrait story-portrait-main"><div className="portrait-orb"><UserRound size={72}/></div><span>LEARNING JOURNEY</span></div><div className="story-portrait story-portrait-small"><div className="portrait-orb"><Users size={36}/></div></div><div className="story-caption"><span className="story-caption-icon"><GraduationCap size={18}/></span><div><b>Progress over promises</b><small>Build your skills at your own pace</small></div></div></div>
    </div></section>
  );
}

function CTA() {
  return <section className="pb-24 pt-10"><div className="site-shell"><div className="cta-panel"><div className="relative z-10 max-w-[620px]"><p className="text-[10px] font-extrabold tracking-[.2em] text-white/55">YOUR NEXT STEP STARTS HERE</p><h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-.05em] text-white sm:text-5xl">Make your next move a smarter one.</h2><p className="mt-4 max-w-[480px] text-sm leading-6 text-white/65">Start with the fundamentals. Build from there. Let the process do the talking.</p><a href="/register" className="btn-primary mt-7">Join AceFX <ArrowUpRight size={15} /></a></div><div className="cta-orbit">A</div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="newsletter"><div className="site-shell flex flex-col items-center py-14 text-center"><div className="newsletter-icon"><Signal size={25} /></div><h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-[#17152c]">Stay close to the markets.</h2><p className="mt-2 max-w-[420px] text-xs leading-6 text-[#55536a]">Explore new learning resources and platform updates as AceFX grows.</p><a href="/register" className="newsletter-link mt-5">Create your AceFX account <ArrowUpRight size={14} /></a></div></div><div className="site-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand /><p className="mt-5 max-w-[260px] text-xs leading-6 text-muted">Forex education built around knowledge, discipline and a clearer approach to the markets.</p></div><div><h3 className="text-xs font-bold text-white">Explore</h3><div className="mt-5 flex flex-col gap-3 text-xs text-muted"><a href="#about">About us</a><a href="#academy">Academy</a><a href="#mentorship">Mentorship</a><a href="#signals">Market insights</a></div></div><div><h3 className="text-xs font-bold text-white">Your account</h3><div className="mt-5 flex flex-col gap-3 text-xs text-muted"><a href="/login">Log in</a><a href="/register">Create account</a><a href="/courses">My learning</a></div></div><div><h3 className="text-xs font-bold text-white">Important</h3><p className="mt-5 text-xs leading-6 text-muted">Forex trading involves substantial risk and may not be suitable for every investor. Educational content is not financial advice or a guarantee of results.</p></div></div><div className="border-t border-line"><div className="site-shell flex flex-col justify-between gap-3 py-5 text-[10px] text-muted sm:flex-row"><span>© {new Date().getFullYear()} AceFX. All rights reserved.</span><span>Trade with clarity. Manage your risk.</span></div></div></footer>;
}

export default function Home() {
  return <><Header /><main><Hero /><TrustStrip /><About /><Academy /><Mentorship /><Signals /><Features /><Stories /><CTA /></main><Footer /></>;
}
