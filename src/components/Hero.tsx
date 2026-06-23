import { useState, useEffect } from 'react';
import { Github, Mail, MapPin, ChevronDown, Code2, Layers, Briefcase } from 'lucide-react';
import { profileData } from '../data';

const TYPING_PHRASES = [
  'Full-Stack Software Engineering Intern',
  'B.Tech ECE Student @ MRCEW',
  'React & Django Engineer',
  'Backend Systems Architect',
  'Problem Solver',
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex(i => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,115,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,115,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-slide-up">
        {/* Active Intern status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-success-400/40 bg-success-400/8 mb-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-400" />
          </span>
          <span className="font-mono text-xs text-success-400 font-semibold">
            Status: Active Intern (Software Development Pipeline)
          </span>
        </div>

        {/* Title line */}
        <div className="mb-3">
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            Full-Stack Software Engineering Intern @ DigiSamaksh Private Limited
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-sans font-semibold text-white mb-4 tracking-tight">
          {profileData.name.split(' ')[0]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            {profileData.name.split(' ')[1]}
          </span>
        </h1>

        <div className="h-8 mb-6">
          <span className="font-mono text-xl text-accent-400">
            {displayed}
            <span className="animate-type-cursor border-r-2 border-accent-400 ml-0.5">&nbsp;</span>
          </span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 text-base leading-relaxed mb-8">
          {profileData.about}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
            <Briefcase size={12} className="text-success-400" />
            <span className="text-success-400">DigiSamaksh Pvt. Ltd.</span>
            <span className="text-slate-600">·</span>
            <span>SWE Intern</span>
          </div>
          <div className="w-px h-4 bg-surface-400 hidden sm:block" />
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
            <MapPin size={12} className="text-accent-400" />
            {profileData.location}
          </div>
          <div className="w-px h-4 bg-surface-400 hidden sm:block" />
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
            <Mail size={12} className="text-primary-400" />
            {profileData.email}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            <Layers size={14} />
            View Projects
          </a>
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
            <Github size={14} />
            GitHub
          </a>
          <a href={`mailto:${profileData.email}`} className="btn-ghost flex items-center gap-2">
            <Mail size={14} />
            Contact
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: Briefcase, label: 'SWE Intern', sub: 'DigiSamaksh Pvt. Ltd.' },
            { icon: Code2, label: '90+ DSA', sub: 'Problems Solved' },
            { icon: Layers, label: '4 Projects', sub: 'Production-Ready' },
            { icon: Github, label: '8.84 CGPA', sub: 'Top 5% of Class' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-white font-mono font-semibold text-sm mb-0.5">
                <Icon size={13} className="text-accent-400" />
                {label}
              </div>
              <div className="text-xs text-slate-500">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent-400 transition-colors animate-float"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
