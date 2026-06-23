import { User, Award, Briefcase } from 'lucide-react';
import { profileData } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary-400 mb-2">// 01. introduction</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">$ cat ./profile/readme.md</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-5">
            {/* Dual identity card */}
            <div className="glass-card p-5 border border-success-400/15 bg-success-400/3">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={14} className="text-success-400" />
                <span className="font-mono text-xs text-success-400">current.role</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success-400" />
                  </span>
                  <span className="font-mono text-xs text-success-400">Active</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <div className="text-slate-500 mb-0.5">company</div>
                  <div className="text-white font-semibold">DigiSamaksh Private Limited</div>
                </div>
                <div>
                  <div className="text-slate-500 mb-0.5">role</div>
                  <div className="text-success-400 font-semibold">Software Engineering Intern</div>
                </div>
                <div>
                  <div className="text-slate-500 mb-0.5">duration</div>
                  <div className="text-white">Jan 2026 – Present</div>
                </div>
                <div>
                  <div className="text-slate-500 mb-0.5">location</div>
                  <div className="text-white">Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* Bio card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-accent-400" />
                <span className="font-mono text-xs text-accent-400">profile.bio</span>
              </div>
              <p className="text-slate-300 leading-[1.8] text-sm">{profileData.about}</p>

              <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'CGPA', value: '8.84 / 10' },
                  { label: 'Class Rank', value: 'Top 5%' },
                  { label: 'Graduating', value: 'May 2027' },
                  { label: 'DSA Problems', value: '90+' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs font-mono text-slate-500 mb-0.5">{label}</div>
                    <div className="text-white font-mono font-semibold text-sm text-glow-blue">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award size={15} className="text-warning-400" />
                <span className="font-mono text-xs text-warning-400">achievements</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-success-400 mt-0.5">▸</span>
                  SWE Intern @ DigiSamaksh Pvt. Ltd.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">▸</span>
                  SIH Internal Round Team Lead
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">▸</span>
                  90+ LeetCode DSA Problems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">▸</span>
                  3 Professional Certifications
                </li>
              </ul>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={15} className="text-success-400" />
                <span className="font-mono text-xs text-success-400">contact</span>
              </div>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="text-slate-500">email:</div>
                <div className="text-accent-400 break-all">{profileData.email}</div>
                <div className="text-slate-500 mt-2">phone:</div>
                <div className="text-accent-400">{profileData.phone}</div>
                <div className="text-slate-500 mt-2">location:</div>
                <div className="text-white">{profileData.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
