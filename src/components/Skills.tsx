import { Code2 } from 'lucide-react';
import { skillsData } from '../data';

const CATEGORY_COLORS: Record<string, string> = {
  Languages: 'text-primary-400 border-primary-400/30 bg-primary-400/5',
  Frontend: 'text-accent-400 border-accent-400/30 bg-accent-400/5',
  'Backend Frameworks': 'text-success-400 border-success-400/30 bg-success-400/5',
  Databases: 'text-warning-400 border-warning-400/30 bg-warning-400/5',
};

const CATEGORY_DOT: Record<string, string> = {
  Languages: 'bg-primary-400',
  Frontend: 'bg-accent-400',
  'Backend Frameworks': 'bg-success-400',
  Databases: 'bg-warning-400',
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary-400 mb-2">// 02. capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-sub">$ ls -la ./skills/</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="glass-card p-5 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[category]}`} />
                <Code2 size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-xs text-slate-400 group-hover:text-white transition-colors">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all duration-200 hover:scale-105 ${CATEGORY_COLORS[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-5">
          <div className="font-mono text-xs text-slate-500 mb-3">$ tech --profile --verbose</div>
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-xs font-mono">
            {[
              { k: 'primary_lang', v: 'JavaScript / Java' },
              { k: 'frameworks', v: 'React.js · Django · Express.js' },
              { k: 'api_style', v: 'REST · WebSocket' },
              { k: 'version_control', v: 'Git · GitHub' },
              { k: 'architecture', v: 'MVC · Clean Architecture · RBAC' },
            ].map(({ k, v }) => (
              <div key={k} className="flex items-center gap-2">
                <span className="text-primary-400">{k}</span>
                <span className="text-slate-600">=</span>
                <span className="text-success-400">"{v}"</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
