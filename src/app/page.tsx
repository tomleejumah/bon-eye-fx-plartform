"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BarChart3, BookOpen,
  Check, Clock3, GraduationCap, Menu, Play, ShieldCheck,
  Signal, Sparkles, TrendingUp, Users, X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academy", href: "#academy" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Signals", href: "#signals" },
];

const courses = [
  {
    level: "BEGINNER",
    title: "Forex Foundations",
    description: "Understand the market, currency pairs, pips and the mechanics behind every trade.",
    lessons: "18 lessons",
    duration: "4.5 hours",
    price: "Free",
    tag: "START HERE",
  },
  {
    level: "INTERMEDIATE",
    title: "Price Action Mastery",
    description: "Read market structure, identify high-probability setups and build a repeatable process.",
    lessons: "32 lessons",
    duration: "8 hours",
    price: "Coming soon",
    tag: "MOST POPULAR",
  },
  {
    level: "ADVANCED",
    title: "Institutional Trading",
    description: "Explore liquidity, order flow concepts and a more disciplined approach to execution.",
    lessons: "24 lessons",
    duration: "6 hours",
    price: "Coming soon",
    tag: "ADVANCED",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Structured learning",
    description: "Follow a clear learning path, from the first chart to a defined trading strategy.",
  },
  {
    icon: Signal,
    title: "Market insights",
    description: "Get focused market breakdowns and trade ideas with the reasoning behind them.",
  },
  {
    icon: Users,
    title: "A serious community",
    description: "Learn alongside traders who value preparation, patience and consistent growth.",
  },
];

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Bon Eye FX home">
      <span className="grid h-10 w-10 place-items-center rounded-sm bg-accent font-display text-lg font-extrabold">B</span>
      <span className="leading-tight">
        <span className="font-display block text-[15px] font-extrabold tracking-[.12em]">BON EYE <span className="text-accent">FX</span></span>
        <span className="mt-1 block text-[8px] font-semibold tracking-[.25em] text-muted">TRADE WITH CLARITY</span>
      </span>
    </a>
  );
}

function MarketChart() {
  return (
    <svg viewBox="0 0 520 260" className="h-full w-full" role="img" aria-label="Illustrative rising market price chart">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c8f169" stopOpacity=".22" />
          <stop offset="100%" stopColor="#c8f169" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="chart-grid">
        {[34, 82, 130, 178, 226].map((y) => <line key={y} x1="0" x2="520" y1={y} y2={y} />)}
        {[60, 150, 240, 330, 420, 510].map((x) => <line key={x} x1={x} x2={x} y1="0" y2="260" />)}
      </g>
      <path className="chart-area" d="M0 214 L34 190 L66 202 L98 155 L130 169 L162 128 L194 146 L226 108 L258 121 L290 80 L322 101 L354 67 L386 82 L418 45 L450 59 L486 20 L520 30 L520 260 L0 260 Z" />
      <path className="chart-line" d="M0 214 L34 190 L66 202 L98 155 L130 169 L162 128 L194 146 L226 108 L258 121 L290 80 L322 101 L354 67 L386 82 L418 45 L450 59 L486 20 L520 30" />
      <circle cx="486" cy="20" r="5" fill="#c8f169" />
      <circle cx="486" cy="20" r="11" fill="#c8f169" opacity=".14" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-line">
      <div className="site-shell flex h-[82px] items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[12px] font-medium text-muted transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href="/login" className="text-[12px] font-semibold text-white/80 transition hover:text-accent">Log in</a>
          <a href="/register" className="btn-primary !min-h-[42px] !px-4">Get started <ArrowUpRight size={15} /></a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded border border-line text-white md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-menu absolute left-0 right-0 top-full border-b border-line bg-[#0d1310] p-5 md:hidden" aria-label="Mobile navigation">
          <div className="site-shell flex flex-col gap-5">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-white">{item.label}</a>
            ))}
            <div className="flex items-center gap-5 border-t border-line pt-4">
              <a href="/login" className="text-sm">Log in</a>
              <a href="/register" className="btn-primary">Get started <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }: {
  eyebrow: string; title: string; description?: string; centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-14 max-w-[620px] text-center" : "mb-12 max-w-[600px]"}>
      <span className={centered ? "eyebrow justify-center" : "eyebrow"}>{eyebrow}</span>
      <h2 className="font-display mt-5 text-3xl font-bold leading-[1.16] tracking-[-.045em] text-white sm:text-4xl md:text-[46px]">{title}</h2>
      {description && <p className="mt-5 text-[14px] leading-7 text-muted">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="site-shell relative grid min-h-[660px] items-center gap-14 py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div className="max-w-[590px]">
          <div className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#c8f169]" /> YOUR JOURNEY. YOUR EDGE.</div>
          <h1 className="font-display mt-7 text-[43px] font-extrabold leading-[1.08] tracking-[-.065em] text-white sm:text-6xl lg:text-[68px]">
            The market rewards <span className="text-accent">preparation.</span>
          </h1>
          <p className="mt-7 max-w-[470px] text-[15px] leading-8 text-muted">
            Stop guessing. Start understanding. Build the knowledge, discipline and confidence to approach forex trading with a plan.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#academy" className="btn-primary">Explore the academy <ArrowUpRight size={16} /></a>
            <a href="#about" className="btn-ghost"><Play size={14} /> Discover Bon Eye FX</a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-7">
            <div><div className="font-display text-xl font-bold text-white">Learn</div><div className="mt-1 text-[10px] tracking-wider text-muted">BUILD YOUR FOUNDATION</div></div>
            <ArrowRight size={16} className="text-accent/70" />
            <div><div className="font-display text-xl font-bold text-white">Practice</div><div className="mt-1 text-[10px] tracking-wider text-muted">REFINE YOUR PROCESS</div></div>
            <ArrowRight size={16} className="text-accent/70" />
            <div><div className="font-display text-xl font-bold text-white">Improve</div><div className="mt-1 text-[10px] tracking-wider text-muted">GROW WITH DISCIPLINE</div></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -inset-10 rounded-full bg-[#a5d75b]/[.07] blur-3xl" />
          <div className="market-card relative rounded-lg p-5 sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[.17em] text-muted">MARKET PERSPECTIVE</p>
                <p className="font-display mt-2 text-xl font-bold text-white">Read the structure.</p>
              </div>
              <span className="rounded border border-[#c8f169]/20 bg-[#c8f169]/[.08] px-2.5 py-1.5 text-[9px] font-bold tracking-wider text-accent">EDUCATIONAL VIEW</span>
            </div>
            <div className="mt-7 flex items-end justify-between">
              <div><p className="text-[10px] text-muted">EUR / USD</p><p className="font-display mt-1 text-3xl font-bold tracking-tight">1.084<span className="text-white/50">2</span></p></div>
              <div className="flex items-center gap-1 text-xs font-semibold text-accent"><TrendingUp size={14} /> Illustrative chart</div>
            </div>
            <div className="mt-4 h-[220px] sm:h-[250px]"><MarketChart /></div>
            <div className="mt-3 flex justify-between border-t border-line pt-4 text-[9px] tracking-wider text-muted">
              <span>PRICE ACTION</span><span>MARKET STRUCTURE</span><span>RISK FIRST</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-md border border-line bg-[#151e1a] px-4 py-3 shadow-xl sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded bg-[#c8f169]/10 text-accent"><ShieldCheck size={18} /></span>
            <span><span className="block text-xs font-semibold">Discipline over hype</span><span className="mt-1 block text-[10px] text-muted">A process built to last</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="border-y border-line bg-[#0d1310]">
      <div className="site-shell grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
        {[
          ["01", "Learn at your pace"],
          ["02", "Practical education"],
          ["03", "Risk-aware mindset"],
          ["04", "Community support"],
        ].map(([number, label]) => (
          <div key={number} className="flex items-center gap-3">
            <span className="font-display text-xs font-bold text-accent">{number}</span>
            <span className="text-[11px] font-medium text-white/75">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-space">
      <div className="site-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative min-h-[390px] overflow-hidden rounded-md border border-line bg-[#111a15] p-7 sm:p-10">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(200,241,105,.13), transparent 42%), linear-gradient(135deg, transparent 50%, rgba(255,255,255,.025) 50%)" }} />
          <div className="relative flex h-full min-h-[320px] flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="eyebrow">THE BON EYE APPROACH</span>
              <BarChart3 className="text-accent" size={22} />
            </div>
            <div>
              <p className="font-display max-w-[380px] text-4xl font-bold leading-tight tracking-[-.05em] text-white sm:text-5xl">Clarity before <span className="text-accent">execution.</span></p>
              <div className="mt-8 flex gap-2">
                <span className="h-1 w-14 rounded-full bg-accent" /><span className="h-1 w-7 rounded-full bg-white/20" /><span className="h-1 w-7 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-5 text-[10px] tracking-[.15em] text-muted">
              <span>KNOWLEDGE</span><span>DISCIPLINE</span><span>CONSISTENCY</span>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="ABOUT BON EYE FX"
            title="Trading is a skill. Treat it like one."
            description="The forex market can feel overwhelming when every chart has a new opinion. Bon Eye FX is built around a simpler idea: understand what you are doing, know why you are doing it, and respect the risk."
          />
          <div className="space-y-5">
            {[
              ["Education without the noise", "Straightforward lessons that focus on understanding, not unrealistic promises."],
              ["A process you can repeat", "Learn to prepare, plan your risk and review your decisions."],
              ["Progress with perspective", "Build your skills over time instead of chasing overnight results."],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent"><Check size={13} /></span>
                <div><h3 className="text-[13px] font-semibold text-white">{title}</h3><p className="mt-1.5 text-[12px] leading-6 text-muted">{body}</p></div>
              </div>
            ))}
          </div>
          <a href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-accent hover:gap-3">More about us <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="section-space bg-[#0d1310]">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="THE LEARNING PATH"
            title="Build your trading knowledge."
            description="A practical learning path designed to help you move from market basics to more advanced trading concepts."
          />
          <a href="/courses" className="mb-14 inline-flex items-center gap-2 text-xs font-bold text-accent hover:gap-3">View all courses <ArrowRight size={15} /></a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((course, index) => (
            <article key={course.title} className="card-surface group rounded-md p-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[.16em] text-accent">{course.level}</span>
                <span className="rounded-sm border border-line px-2 py-1 text-[8px] font-semibold tracking-wider text-muted">{course.tag}</span>
              </div>
              <div className="mt-8 grid h-11 w-11 place-items-center rounded bg-accent/10 text-accent">
                {index === 0 ? <BookOpen size={20} /> : index === 1 ? <TrendingUp size={20} /> : <Sparkles size={20} />}
              </div>
              <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-white">{course.title}</h3>
              <p className="mt-3 min-h-[72px] text-[12px] leading-6 text-muted">{course.description}</p>
              <div className="mt-6 flex gap-4 border-t border-line pt-4 text-[10px] text-muted">
                <span className="flex items-center gap-1.5"><BookOpen size={12} />{course.lessons}</span>
                <span className="flex items-center gap-1.5"><Clock3 size={12} />{course.duration}</span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-white">{course.price}</span>
                <a href="/courses" className="flex items-center gap-2 text-[11px] font-bold text-accent transition group-hover:gap-3">Explore <ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section id="mentorship" className="section-space">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-md border border-[#c8f169]/20 bg-[#131c16] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full bg-accent/[.08] blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-[650px]">
              <span className="eyebrow">PERSONAL GUIDANCE</span>
              <h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-[-.05em] text-white sm:text-5xl">You don't have to figure it all out alone.</h2>
              <p className="mt-5 max-w-[560px] text-sm leading-7 text-muted">Get guidance, structured feedback and a clearer path for your trading development. Learn to think through a trade, not simply follow one.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/mentorship" className="btn-primary">Explore mentorship <ArrowUpRight size={15} /></a>
                <a href="#academy" className="btn-ghost">Explore learning</a>
              </div>
            </div>
            <div className="hidden h-40 w-40 place-items-center rounded-full border border-accent/20 bg-accent/[.04] lg:grid">
              <div className="grid h-28 w-28 place-items-center rounded-full border border-accent/30 text-accent"><GraduationCap size={48} strokeWidth={1.2} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signals() {
  return (
    <section id="signals" className="section-space bg-[#0d1310]">
      <div className="site-shell grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="MARKET INSIGHTS"
            title="Understand the idea behind the setup."
            description="Access structured market commentary and trade breakdowns that explain the context, the levels being watched and the risk involved."
          />
          <ul className="space-y-4 text-[13px] text-white/80">
            {["Market context and technical breakdowns", "Entry idea, invalidation and risk considerations", "Educational notes with every published setup"].map((item) => (
              <li key={item} className="flex items-center gap-3"><Check size={15} className="text-accent" />{item}</li>
            ))}
          </ul>
          <a href="/signals" className="btn-primary mt-9">Explore market insights <ArrowUpRight size={15} /></a>
        </div>
        <div className="card-surface rounded-md p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-line pb-5">
            <div><span className="text-[9px] font-bold tracking-[.18em] text-accent">SAMPLE MARKET NOTE</span><h3 className="font-display mt-2 text-lg font-bold">EUR/USD — Market watch</h3></div>
            <span className="rounded-sm bg-accent/10 px-2.5 py-1.5 text-[9px] font-bold text-accent">EDUCATIONAL</span>
          </div>
          <div className="grid grid-cols-2 gap-3 py-6">
            <div className="rounded bg-white/[.025] p-4"><p className="text-[9px] tracking-wider text-muted">MARKET BIAS</p><p className="mt-2 text-sm font-bold text-white">Wait for confirmation</p></div>
            <div className="rounded bg-white/[.025] p-4"><p className="text-[9px] tracking-wider text-muted">TIMEFRAME</p><p className="mt-2 text-sm font-bold text-white">4H / 1H</p></div>
          </div>
          <div className="space-y-4 border-t border-line pt-5">
            <div><p className="text-[9px] font-bold tracking-wider text-muted">WHAT TO WATCH</p><p className="mt-2 text-xs leading-6 text-white/75">Observe how price reacts around the recent structure. Avoid forcing an entry before the setup is clear.</p></div>
            <div className="flex items-center justify-between border-t border-line pt-4 text-[10px] text-muted"><span>Illustrative example only</span><span className="flex items-center gap-1 text-accent"><ShieldCheck size={12} /> Risk first</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionHeading eyebrow="WHY BON EYE FX" title="More than charts and calls." description="The goal isn't to make trading look easy. It's to help you approach it with more knowledge and better habits." centered />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card-surface rounded-md p-7">
              <Icon size={23} className="text-accent" strokeWidth={1.6} />
              <h3 className="font-display mt-7 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-xs leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-md bg-accent px-7 py-12 text-[#11170b] sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-28 h-80 w-80 rounded-full border border-black/10" />
          <div className="absolute -right-2 -top-20 h-64 w-64 rounded-full border border-black/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-[600px]">
              <p className="text-[10px] font-extrabold tracking-[.2em] text-black/60">YOUR NEXT STEP STARTS HERE</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Make your next move a smarter one.</h2>
              <p className="mt-4 max-w-[480px] text-sm leading-6 text-black/65">Start with the fundamentals. Build from there. Let the process do the talking.</p>
            </div>
            <a href="/register" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm bg-[#11170b] px-6 text-xs font-bold text-white transition hover:bg-[#26351a]">Join Bon Eye FX <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-[#0b100e]">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><Brand /><p className="mt-5 max-w-[260px] text-xs leading-6 text-muted">Forex education built around knowledge, discipline and a clearer approach to the markets.</p></div>
        <div><h3 className="text-xs font-bold text-white">Explore</h3><div className="mt-5 flex flex-col gap-3 text-xs text-muted"><a href="#about" className="hover:text-accent">About us</a><a href="#academy" className="hover:text-accent">Academy</a><a href="#mentorship" className="hover:text-accent">Mentorship</a><a href="#signals" className="hover:text-accent">Market insights</a></div></div>
        <div><h3 className="text-xs font-bold text-white">Your account</h3><div className="mt-5 flex flex-col gap-3 text-xs text-muted"><a href="/login" className="hover:text-accent">Log in</a><a href="/register" className="hover:text-accent">Create account</a><a href="/courses" className="hover:text-accent">My learning</a></div></div>
        <div><h3 className="text-xs font-bold text-white">Important</h3><p className="mt-5 text-xs leading-6 text-muted">Forex trading involves substantial risk and may not be suitable for every investor. Educational content is not financial advice or a guarantee of results.</p></div>
      </div>
      <div className="border-t border-line"><div className="site-shell flex flex-col justify-between gap-3 py-5 text-[10px] text-muted sm:flex-row"><span>© {new Date().getFullYear()} Bon Eye FX. All rights reserved.</span><span>Trade with clarity. Manage your risk.</span></div></div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Academy />
        <Mentorship />
        <Signals />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
