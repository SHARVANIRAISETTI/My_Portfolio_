import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'LeetCode', href: '#leetcode' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-surface-900/90 backdrop-blur-md border-b border-white/5 shadow-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Terminal size={18} className="text-accent-400" />
          <span className="font-mono text-white font-semibold text-sm">
            <span className="text-accent-400">~/</span>sharvani
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:sharvani2410@gmail.com`}
          className="hidden md:block btn-primary text-xs py-2"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-800/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
