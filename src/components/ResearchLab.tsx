import { useState } from 'react';
import { FlaskConical, Shield, ShieldAlert, AlertTriangle } from 'lucide-react';
import { systemsPoem } from '../data';

const TABS = [
  { id: 0, label: '1. Executive Summary', short: 'Summary' },
  { id: 1, label: '2. Market Weaknesses', short: 'Market' },
  { id: 2, label: '3. Technical & AI Strategy', short: 'AI Strategy' },
  { id: 3, label: '4. Multi-Layer Pipeline', short: 'Pipeline' },
  { id: 4, label: '5. Try-On Security', short: 'Security' },
  { id: 5, label: '9. Systems Poem', short: 'Poem' },
];

const SQL_DDL = `CREATE TABLE ClothLabMetrics (
  metric_id       INT AUTO_INCREMENT PRIMARY KEY,
  product_sku     VARCHAR(64) NOT NULL,
  fabric_type     ENUM('cotton','polyester','silk','linen','blend') NOT NULL,
  weight_gsm      DECIMAL(6,2) COMMENT 'fabric weight in grams/sq-meter',
  stretch_pct     DECIMAL(5,2) COMMENT 'stretch percentage 0-100',
  size_label      VARCHAR(8) NOT NULL COMMENT 'S/M/L/XL/XXL',
  bust_cm         DECIMAL(5,2),
  waist_cm        DECIMAL(5,2),
  hip_cm          DECIMAL(5,2),
  fit_type        ENUM('slim','regular','relaxed','oversized') DEFAULT 'regular',
  supplier_id     INT NOT NULL,
  return_rate_pct DECIMAL(4,2) DEFAULT 0.00 COMMENT 'logistics return rate',
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_sku (product_sku),
  INDEX idx_supplier (supplier_id),
  INDEX idx_fabric_size (fabric_type, size_label)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const ASCII_PIPELINE = `
┌─────────────────────────────────────────────────────────────────┐
│              SMART E-COMMERCE ARCHITECTURE PIPELINE              │
└─────────────────────────────────────────────────────────────────┘

  [ Browser / Angular UI ]
         │
         │  HTTPS + JSON Web Token (Bearer Authorization Header)
         ▼
  ┌──────────────────────────────────────────────────────────┐
  │        .NET Core 8.0 Web API Gateway Hub                 │
  │        • JWT Token Validation Middleware                 │
  │        • Route Dispatch & Rate Limiting                  │
  │        • Request Correlation ID Injection                │
  └──────────────┬──────────────────────┬────────────────────┘
                 │                      │
     ┌───────────▼──────────┐  ┌────────▼──────────────────┐
     │  Dapper micro-ORM    │  │  Remote FastAPI Cloud      │
     │  + MySQL 8.0+        │  │  (Stateless LLM Wrapper)   │
     │                      │  │                            │
     │  Query Latency:      │  │  • AI Recommendations      │
     │  ✓ Dapper  < 45ms   │  │  • Fabric Scoring Engine   │
     │  ✗ EF Core ~ 180ms  │  │  • Similarity Search       │
     │                      │  │  • Zero Local RAM overhead │
     │  Tables:             │  │  • HTTPS-only interface    │
     │  • ClothLabMetrics   │  │  • Stateless per-request   │
     │  • Products          │  └────────────────────────────┘
     │  • Users / Orders    │
     └──────────────────────┘

  Total Stack: Angular + .NET Core 8.0 + Dapper/MySQL + FastAPI Cloud
  Latency gain: 135ms per query vs legacy EF Core (75% improvement)
`;

const TS_SNIPPET = `// TypeScript: Focus-Loss DRM Handler
const handleVisibilityChange = (): void => {
  if (document.visibilityState === 'hidden') {
    blurPreviewCanvas();
    dispatchSecurityEvent('FOCUS_LOSS_DETECTED');
  }
};

const handleWindowBlur = (): void => {
  applyBlurOverlay(true);
  showSecurityBanner(
    'Screen capture activity detected'
  );
};

document.addEventListener(
  'visibilitychange',
  handleVisibilityChange
);
window.addEventListener('blur', handleWindowBlur);
window.addEventListener('focus', () => {
  applyBlurOverlay(false);
});`;

function Tab0() {
  return (
    <div className="space-y-5">
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold mb-3 text-sm">Budget Marketplace Accessibility vs. Trust Deficit</h3>
        <p className="text-slate-300 text-sm leading-[1.8]">
          Budget-tier marketplaces like Meesho have successfully democratized price accessibility across tier-2 and
          tier-3 Indian markets, enabling millions of first-time online shoppers to participate in e-commerce.
          However, this accessibility model carries a structural trust deficit: a deeply fragmented, decentralized
          supplier ecosystem with no standardized quality gateway means consumers cannot verify fabric quality,
          garment weight, or true sizing before purchase.
        </p>
        <p className="text-slate-300 text-sm leading-[1.8] mt-3">
          This research proposes a <span className="text-accent-400 font-mono">Smart E-Commerce Platform with AI Recommendations</span> — 
          a technical framework designed to close the information gap between product listing and buyer confidence 
          through intelligent fabric metadata indexing, AI-driven size matching, and a virtual try-on layer with 
          built-in screen-capture DRM protection.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: 'Target Market', value: 'Meesho-category buyers', color: 'text-primary-400' },
          { label: 'Core Problem', value: 'Sizing & fabric blind-buy', color: 'text-error-400' },
          { label: 'Solution Layer', value: 'AI + DRM + Dapper ORM', color: 'text-success-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass-card p-4 text-center">
            <div className="text-xs font-mono text-slate-500 mb-1">{label}</div>
            <div className={`text-sm font-mono font-semibold ${color}`}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          {
            title: 'Sizing Inconsistency',
            desc: 'No standardized size-to-measurement mapping across unbranded suppliers means an "M" in one catalog is an "L" in another — creating a 34%+ return trigger.',
            color: 'border-error-400/20',
            dot: 'bg-error-400',
          },
          {
            title: 'Blind Purchase Problem',
            desc: 'Flat 2D product photography cannot communicate fabric weight (GSM), stretch percentage, drape behavior, or texture — the variables that determine fit satisfaction.',
            color: 'border-warning-400/20',
            dot: 'bg-warning-400',
          },
          {
            title: 'Reverse Logistics Crisis',
            desc: 'High return rates driven by size mismatch generate unsustainable logistics loops — each return cycle adding ₹80–120 operational cost per package to the supply chain.',
            color: 'border-orange-400/20',
            dot: 'bg-orange-400',
          },
        ].map(({ title, desc, color, dot }) => (
          <div key={title} className={`glass-card p-5 border ${color}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              <span className="text-white font-semibold text-xs">{title}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success-400">// ClothLabMetrics production schema (MySQL)</span>
        </div>
        <pre className="terminal-block text-xs leading-relaxed overflow-x-auto whitespace-pre">{SQL_DDL}</pre>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <div className="font-mono text-xs text-accent-400 mb-3">// Development Machine Profile</div>
          <div className="space-y-2 font-mono text-xs">
            {[
              ['CPU', 'Intel Core i5 — 14th Generation'],
              ['RAM', '16 GB DDR5'],
              ['Storage', 'NVMe SSD'],
              ['OS', 'Windows 11'],
              ['IDE', 'VS Code + GitHub Copilot'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-3">
                <span className="text-primary-400 w-14 flex-shrink-0">{k}</span>
                <span className="text-slate-600">:</span>
                <span className="text-slate-300">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-5">
          <div className="font-mono text-xs text-warning-400 mb-3">// Memory Strategy</div>
          <p className="text-slate-300 text-xs leading-relaxed mb-3">
            To safeguard local memory constraints on the i5/16GB development machine, all LLM inference processing 
            is offloaded to a stateless <span className="text-accent-400">remote FastAPI cloud instance</span> over 
            HTTPS. The local system only dispatches JSON payloads and receives scored recommendation responses.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 glass-card p-3 text-center">
              <div className="text-2xl font-mono font-bold text-success-400 text-glow-green">0%</div>
              <div className="text-xs text-slate-500 font-mono mt-1">Local RAM Overhead</div>
            </div>
            <div className="flex-1 glass-card p-3 text-center">
              <div className="text-2xl font-mono font-bold text-accent-400">HTTPS</div>
              <div className="text-xs text-slate-500 font-mono mt-1">Secure Transport</div>
            </div>
          </div>
        </div>
      </div>
      <div className="glass-card p-5">
        <div className="font-mono text-xs text-primary-400 mb-3">// AI Recommendation Pipeline</div>
        <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
          {[
            { step: '01', title: 'User Behavior Capture', desc: 'Angular frontend tracks browse/filter/dwell signals' },
            { step: '02', title: 'JSON Payload Dispatch', desc: '.NET Core Gateway serializes context to FastAPI endpoint' },
            { step: '03', title: 'LLM Scoring Response', desc: 'Cloud FastAPI returns ranked recommendations with confidence scores' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="border border-white/5 rounded-lg p-3">
              <div className="text-primary-400 text-lg font-bold mb-1">{step}</div>
              <div className="text-white mb-1">{title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="space-y-4">
      <div className="glass-card p-5">
        <div className="font-mono text-xs text-accent-400 mb-3">// architecture.pipeline.ascii</div>
        <pre className="font-mono text-xs text-green-400 leading-relaxed whitespace-pre overflow-x-auto">{ASCII_PIPELINE}</pre>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="glass-card p-4">
          <div className="font-mono text-xs text-success-400 mb-2">Dapper micro-ORM</div>
          <div className="text-2xl font-mono font-bold text-success-400 text-glow-green">&lt; 45ms</div>
          <div className="text-xs text-slate-500 font-mono">average query latency</div>
        </div>
        <div className="glass-card p-4">
          <div className="font-mono text-xs text-error-400 mb-2">Entity Framework Core (legacy)</div>
          <div className="text-2xl font-mono font-bold text-error-400">~ 180ms</div>
          <div className="text-xs text-slate-500 font-mono">average query latency</div>
        </div>
      </div>
    </div>
  );
}

function Tab4() {
  const [blurActive, setBlurActive] = useState(false);

  const handleToggle = (checked: boolean) => {
    setBlurActive(checked);
    if (checked) {
      setTimeout(() => {
        alert('🔒 SECURITY ENFORCED: Preview Hidden — Screen Capture Activity Detected.');
      }, 150);
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Canvas panel */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield size={14} className={blurActive ? 'text-error-400' : 'text-success-400'} />
              <span className="font-mono text-xs text-white">Visual Framework Simulator Canvas</span>
            </div>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={blurActive}
                onChange={e => handleToggle(e.target.checked)}
                className="w-3.5 h-3.5 accent-primary-500"
              />
              <span className="font-mono text-xs text-slate-400">Simulate Screenshot / Snipping Tool Blur Action</span>
            </label>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white/5 h-56 watermark-bg">
            <div className="watermark-text" />

            {/* Canvas content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
                blurActive ? 'blur-2xl brightness-50' : ''
              }`}
            >
              <div className="text-center">
                <div className="font-mono text-xs text-accent-400 mb-1">VIRTUAL TRY-ON PREVIEW</div>
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-500/30 to-accent-400/30 border border-white/10 flex items-center justify-center">
                  <span className="text-3xl">👗</span>
                </div>
                <div className="font-mono text-xs text-slate-400 mt-2">Model: Cotton Kurta — Size M</div>
                <div className="font-mono text-xs text-slate-500">Fit Score: 94.2% match</div>
              </div>
            </div>

            {blurActive && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-surface-900/90 border border-error-400/40 rounded-lg px-4 py-3 text-center max-w-xs">
                  <ShieldAlert size={16} className="text-error-400 mx-auto mb-2" />
                  <p className="font-mono text-xs text-error-400 font-semibold">SECURITY ENFORCED</p>
                  <p className="font-mono text-xs text-slate-400 mt-1">Preview Hidden — Screen Capture Activity Detected</p>
                </div>
              </div>
            )}
          </div>

          {!blurActive && (
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-success-400 animate-pulse" />
              <span className="font-mono text-xs text-success-400">Preview Active — DRM Monitoring</span>
            </div>
          )}
          {blurActive && (
            <div className="flex items-center gap-2 mt-3">
              <AlertTriangle size={12} className="text-error-400" />
              <span className="font-mono text-xs text-error-400">DRM Triggered — Blur Layer Enforced</span>
            </div>
          )}
        </div>

        {/* TS snippet */}
        <div className="glass-card p-5">
          <div className="font-mono text-xs text-warning-400 mb-3">// focus-loss-handler.ts</div>
          <pre className="terminal-block text-xs leading-relaxed overflow-x-auto whitespace-pre text-green-400">{TS_SNIPPET}</pre>
        </div>
      </div>
    </div>
  );
}

function Tab5() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <FlaskConical size={15} className="text-primary-400" />
        <span className="font-mono text-xs text-primary-400">systems.poem — Sharvani Raisetti</span>
      </div>
      <pre className="font-mono text-sm text-slate-300 leading-[2] italic whitespace-pre-wrap overflow-x-auto">
        {systemsPoem}
      </pre>
    </div>
  );
}

const TAB_PANELS = [Tab0, Tab1, Tab2, Tab3, Tab4, Tab5];

export function ResearchLab() {
  const [activeTab, setActiveTab] = useState(0);
  const Panel = TAB_PANELS[activeTab];

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-xs text-primary-400 mb-2">// 05. active research & internship delivery</p>
          <h2 className="section-title">Smart E-Commerce with AI Recommendations</h2>
          <p className="section-sub">Core Technical Design Research Proposal & Evaluation Report — DigiSamaksh Internship Primary Delivery</p>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-warning-400/30 bg-warning-400/5">
              <span className="w-2 h-2 rounded-full bg-warning-400 animate-pulse" />
              <span className="font-mono text-xs text-warning-400">Active Research — In-Progress Milestone</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-success-400/30 bg-success-400/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success-400" />
              </span>
              <span className="font-mono text-xs text-success-400">DigiSamaksh Internship Evaluation Submission</span>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.short}</span>
            </button>
          ))}
        </div>

        <div className="animate-fade-in" key={activeTab}>
          <Panel />
        </div>
      </div>
    </section>
  );
}
