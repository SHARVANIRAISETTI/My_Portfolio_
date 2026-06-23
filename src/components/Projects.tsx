import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projectsData } from '../data';
import { Modal } from './Modal';

export function Projects() {
  const [selected, setSelected] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary-400 mb-2">// 03. portfolio</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">$ git log --oneline --all</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projectsData.map(project => (
            <div
              key={project.id}
              className={`glass-card p-6 bg-gradient-to-br ${project.color} hover:scale-[1.015] transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              onClick={() => setSelected(project)}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ background: project.accent }}
              />

              <div className="flex items-start justify-between mb-3 relative z-10">
                <div>
                  <h3 className="text-white font-sans font-semibold text-base">{project.name}</h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: project.accent }}>
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Eye size={14} className="text-slate-400" />
                  <span className="text-xs font-mono text-slate-400">Details</span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4 relative z-10">
                {project.brief}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded border"
                    style={{ borderColor: `${project.accent}30`, color: project.accent, background: `${project.accent}08` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <Github size={13} />
                  GitHub
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.name} — ${selected.subtitle}` : ''}
        accentColor={selected?.accent}
      >
        {selected && (
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">{selected.details}</p>
            <div>
              <div className="text-xs font-mono text-slate-500 mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {selected.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border"
                    style={{ borderColor: `${selected.accent}40`, color: selected.accent }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2 text-xs"
              >
                <Github size={13} />
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
