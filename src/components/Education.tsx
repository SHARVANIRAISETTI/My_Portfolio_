import { useState } from 'react';
import { GraduationCap, Trophy, Award, ChevronRight, Briefcase, MapPin, Calendar } from 'lucide-react';
import { educationData, achievementsData, certificationsData, internshipData } from '../data';
import { Modal } from './Modal';

type ModalContent = { title: string; body: React.ReactNode; accent?: string } | null;

export function Education() {
  const [modal, setModal] = useState<ModalContent>(null);

  const openInternship = () => {
    setModal({
      title: `${internshipData.company} — ${internshipData.title}`,
      accent: '#22c55e',
      body: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="tag text-success-400 border-success-400/30 bg-success-400/8">
              {internshipData.duration}
            </span>
            <span className="tag text-accent-400">{internshipData.location}</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border border-success-400/30 bg-success-400/8 text-success-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success-400" />
              </span>
              Active
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm">{internshipData.details}</p>
          <div>
            <div className="text-xs font-mono text-slate-500 mb-2">Key Responsibilities</div>
            <ul className="space-y-1.5">
              {internshipData.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-mono">
                  <ChevronRight size={12} className="text-success-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    });
  };

  const openEdu = (edu: typeof educationData[0]) => {
    setModal({
      title: edu.institution,
      accent: '#0073ff',
      body: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="tag">{edu.timeline}</span>
            {'cgpa' in edu && <span className="tag text-success-400">{edu.cgpa}</span>}
            {'score' in edu && <span className="tag text-success-400">{(edu as { score: string }).score}</span>}
          </div>
          <p className="text-white font-semibold">{edu.degree}</p>
          {'rank' in edu && <p className="text-accent-400 font-mono text-xs">{(edu as { rank: string }).rank}</p>}
          <ul className="space-y-1.5 mt-3">
            {edu.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-mono">
                <ChevronRight size={12} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    });
  };

  const openAch = (ach: typeof achievementsData[0]) => {
    setModal({
      title: ach.title,
      accent: '#facc15',
      body: <p className="leading-relaxed">{ach.details}</p>,
    });
  };

  return (
    <section id="education" className="py-24 px-6 bg-surface-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary-400 mb-2">// 04. background & experience</p>
          <h2 className="section-title">Experience, Education & Achievements</h2>
          <p className="section-sub">$ cat ./resume/experience.json</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">

            {/* ── Work Experience ── */}
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={15} className="text-success-400" />
              <span className="font-mono text-xs text-success-400">work.experience</span>
            </div>

            <div
              className="glass-card p-5 cursor-pointer border border-success-400/20 hover:border-success-400/40 transition-all duration-200 group bg-success-400/3"
              onClick={openInternship}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-success-400/60 to-transparent" />
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-sans font-semibold text-sm leading-tight">
                      {internshipData.company}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-mono rounded bg-success-400/10 border border-success-400/25 text-success-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success-400" />
                      </span>
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-success-400 font-mono font-semibold">{internshipData.title}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar size={11} className="text-slate-600" />
                      {internshipData.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <MapPin size={11} className="text-slate-600" />
                      {internshipData.location}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{internshipData.brief}</p>
                </div>
                <ChevronRight
                  size={15}
                  className="text-slate-600 group-hover:text-success-400 transition-colors flex-shrink-0 mt-1 ml-3"
                />
              </div>
            </div>

            {/* ── Education ── */}
            <div className="flex items-center gap-2 pt-4 mb-2">
              <GraduationCap size={15} className="text-primary-400" />
              <span className="font-mono text-xs text-primary-400">education.nodes</span>
            </div>

            {educationData.map(edu => (
              <div
                key={edu.id}
                className="glass-card p-5 cursor-pointer hover:border-primary-500/30 transition-all duration-200 group"
                onClick={() => openEdu(edu)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-sans font-semibold text-sm leading-tight">{edu.institution}</h3>
                    <p className="text-xs text-primary-400 font-mono mt-1">{edu.degree}</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">{edu.timeline}</p>
                    <p className="text-xs text-slate-400 mt-2">{edu.brief}</p>
                  </div>
                  <ChevronRight
                    size={15}
                    className="text-slate-600 group-hover:text-accent-400 transition-colors flex-shrink-0 mt-1 ml-3"
                  />
                </div>
              </div>
            ))}

            {/* ── Certifications ── */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Award size={15} className="text-success-400" />
                <span className="font-mono text-xs text-success-400">certifications</span>
              </div>
              <div className="flex flex-col gap-2">
                {certificationsData.map(cert => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between glass-card px-4 py-3 hover:border-success-400/20 transition-all duration-200"
                  >
                    <div>
                      <span className="text-white text-xs font-semibold">{cert.name}</span>
                      <span className="text-slate-500 text-xs font-mono ml-2">— {cert.issuer}</span>
                    </div>
                    <span className="tag text-success-400 border-success-400/20 bg-success-400/5">{cert.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Achievements ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={16} className="text-warning-400" />
              <span className="font-mono text-xs text-warning-400">achievements</span>
            </div>
            <div className="flex flex-col gap-4">
              {achievementsData.map(ach => (
                <div
                  key={ach.id}
                  className="glass-card p-5 cursor-pointer hover:border-warning-400/30 transition-all duration-200 group"
                  onClick={() => openAch(ach)}
                >
                  <div className="flex items-start gap-3">
                    <Trophy size={14} className="text-warning-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-semibold leading-tight">{ach.title}</h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{ach.brief}</p>
                    </div>
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-warning-400 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title ?? ''}
        accentColor={modal?.accent}
      >
        {modal?.body}
      </Modal>
    </section>
  );
}
