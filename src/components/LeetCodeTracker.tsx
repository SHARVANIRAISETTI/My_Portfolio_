import { useState, useEffect } from 'react';
import { Code2, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { profileData } from '../data';

interface LCStats {
  solved: number;
  easy: number;
  medium: number;
  hard: number;
}

const FALLBACK: LCStats = { solved: 92, easy: 40, medium: 45, hard: 7 };

const PROXIES = [
  `https://leetcode-api-faisalshohag.vercel.app/${profileData.leetcodeUser}`,
  `https://leetcode-stats-api.herokuapp.com/${profileData.leetcodeUser}`,
];

async function fetchFromProxy(url: string): Promise<LCStats> {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const solved = data.totalSolved ?? data.solvedProblem ?? data.solved ?? null;
  const easy = data.easySolved ?? data.easy ?? null;
  const medium = data.mediumSolved ?? data.medium ?? null;
  const hard = data.hardSolved ?? data.hard ?? null;
  if (solved === null) throw new Error('Unexpected response shape');
  return { solved, easy: easy ?? 0, medium: medium ?? 0, hard: hard ?? 0 };
}

export function LeetCodeTracker() {
  const [stats, setStats] = useState<LCStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<'live' | 'fallback' | 'error'>('live');

  const load = async () => {
    setLoading(true);
    for (const url of PROXIES) {
      try {
        const data = await fetchFromProxy(url);
        setStats(data);
        setStatus('live');
        setLoading(false);
        return;
      } catch {
        // try next proxy
      }
    }
    setStats(FALLBACK);
    setStatus('fallback');
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const total = stats?.solved ?? 0;
  const pct = Math.round((total / 3000) * 100);

  return (
    <section id="leetcode" className="py-24 px-6 bg-surface-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-primary-400 mb-2">// 06. competitive programming</p>
          <h2 className="section-title">LeetCode Tracker</h2>
          <p className="section-sub">$ leetcode --user {profileData.leetcodeUser} --stats</p>
        </div>

        <div className="glass-card p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning-400/10 border border-warning-400/20">
                <Code2 size={18} className="text-warning-400" />
              </div>
              <div>
                <div className="text-white font-semibold">{profileData.leetcodeUser}</div>
                <div className="text-xs font-mono text-slate-500">leetcode.com/u/{profileData.leetcodeUser}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {status === 'live' && (
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-success-400" />
                  <span className="text-xs font-mono text-success-400">Live Data</span>
                </div>
              )}
              {status === 'fallback' && (
                <div className="flex items-center gap-1.5">
                  <AlertCircle size={12} className="text-warning-400" />
                  <span className="text-xs font-mono text-warning-400">Cached</span>
                </div>
              )}
              <button
                onClick={load}
                disabled={loading}
                className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
              >
                <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 bg-surface-500/50 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="text-5xl font-mono font-bold text-white text-glow-green mb-1">
                  {stats!.solved}
                </div>
                <div className="text-sm font-mono text-slate-400">Problems Solved</div>
                <div className="mt-4 h-2 bg-surface-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <div className="text-xs font-mono text-slate-600 mt-1">{pct}% of 3000 problems</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Easy', value: stats!.easy, color: 'text-success-400', border: 'border-success-400/20', bg: 'bg-success-400/5' },
                  { label: 'Medium', value: stats!.medium, color: 'text-warning-400', border: 'border-warning-400/20', bg: 'bg-warning-400/5' },
                  { label: 'Hard', value: stats!.hard, color: 'text-error-400', border: 'border-error-400/20', bg: 'bg-error-400/5' },
                ].map(({ label, value, color, border, bg }) => (
                  <div key={label} className={`glass-card p-4 text-center border ${border} ${bg}`}>
                    <div className={`text-2xl font-mono font-bold ${color} text-glow-green`}>{value}</div>
                    <div className={`text-xs font-mono ${color} mt-0.5 opacity-70`}>{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 terminal-block text-xs">
                <span className="text-slate-500">topics: </span>
                <span className="text-accent-400">Arrays · Strings · Hashing · Sliding Window · Trees · Binary Search · Dynamic Programming</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
