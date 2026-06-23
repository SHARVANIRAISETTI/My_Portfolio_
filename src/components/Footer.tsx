import { Github, Linkedin, Mail, Phone, MapPin, Terminal, Heart } from 'lucide-react';
import { profileData } from '../data';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-surface-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={16} className="text-accent-400" />
              <span className="font-mono font-semibold text-white">~/sharvani</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              B.Tech ECE student and full-stack developer. Building production-grade systems, one commit at a time.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-slate-500 mb-3">// quick.links</div>
            <div className="grid grid-cols-2 gap-1.5">
              {['About', 'Skills', 'Projects', 'Education', 'Research', 'LeetCode'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs font-mono text-slate-400 hover:text-accent-400 transition-colors"
                >
                  ▸ {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-slate-500 mb-3">// contact.matrix</div>
            <div className="space-y-2.5">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2.5 group"
              >
                <Mail size={13} className="text-primary-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors break-all">
                  {profileData.email}
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-success-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-400">{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-accent-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-400">{profileData.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/5 hover:border-primary-500/40 text-slate-500 hover:text-white transition-all duration-200 hover:bg-primary-500/10"
              >
                <Github size={14} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/5 hover:border-primary-500/40 text-slate-500 hover:text-white transition-all duration-200 hover:bg-primary-500/10"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg border border-white/5 hover:border-primary-500/40 text-slate-500 hover:text-white transition-all duration-200 hover:bg-primary-500/10"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-slate-600">
            &copy; {new Date().getFullYear()} Sharvani Raisetti. All rights reserved.
          </p>
          <p className="text-xs font-mono text-slate-600 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-error-400" /> React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
