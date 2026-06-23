import { useState, useRef, useEffect } from 'react';
import { X, Send, Terminal, Bot, User, ChevronRight } from 'lucide-react';
import { profileData } from '../data';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.match(/intern|internship|digisamaksh|experience|work/)) {
    return `Sharvani Raisetti is currently working as a Software Engineering Intern at DigiSamaksh Private Limited (Jan 2026 – Present). In this role, she collaborates on full-stack application development pipelines, builds highly responsive backend design pattern architectures, writes modular RESTful APIs, and coordinates system optimization tasks. This corporate role is closely aligned with her active Smart E-Commerce AI Recommendation research proposal project — her primary technical delivery requirement for the evaluation panel.`;
  }

  if (q.match(/sharvani|who is|tell me about/)) {
    return `Sharvani Raisetti is a B.Tech ECE student at Malla Reddy College of Engineering for Women (Graduating May 2027) with an 8.84/10 CGPA — Top 5% of her class. She is also an active Software Engineering Intern at DigiSamaksh Private Limited (Jan 2026 – Present), building design-pattern-driven enterprise software stacks, RESTful API controllers, and optimized backend database transactions. She has 90+ DSA problems solved and led a 5-member team in the SIH Internal Hackathon to deliver a working prototype.`;
  }

  if (q.match(/research|e-commerce|proposal|fabric|meesho|clothlab/)) {
    return `Sharvani's active research proposal is a Smart E-Commerce Platform with AI Recommendations. The architecture layers: Angular UI → HTTPS Bearer token auth → .NET Core 8.0 Web API Gateway → Dapper micro-ORM on MySQL 8.0 (< 45ms query latency vs ~180ms on legacy EF Core). AI inference is offloaded to a stateless FastAPI cloud instance over HTTPS, maintaining a 0% local RAM overhead on her i5 14th Gen / 16GB dev machine. The system also includes a try-on DRM framework (DigiSamaksh) to prevent screen-capture piracy.`;
  }

  if (q.match(/sih|hackathon|lead|team lead/)) {
    return `In the Smart India Hackathon (SIH) Internal Round, Sharvani served as Team Lead for a 5-member cross-functional team. She directed the full project lifecycle — from architecture planning through delivery — adapting scope under strict deadlines. The team delivered a functional working prototype that was successfully evaluated by a panel of judges.`;
  }

  if (q.match(/urbanbridge|django|maps|websocket|service marketplace/)) {
    return `UrbanBridge is a Full-Stack Service Marketplace engineered on a Django backend. It tracks live user coordinates using the Google Maps API for geolocation-based service matching, and implements WebSocket channels for real-time notification streams. The booking lifecycle — request, accept, track, complete — runs as a zero-refresh event-driven flow between service providers and consumers.`;
  }

  if (q.match(/dreamworld|mern|jwt|e.?commerce|cart/)) {
    return `DreamWorld is a MERN-stack E-Commerce Platform supporting 50+ product listings. It uses a secure authentication pattern with custom JWT cookie tokens and implements role-based access validation separating admin and customer flows. The backend exposes 15+ RESTful API endpoints covering the full product-to-order lifecycle, with optimistic cart state updates on the React.js frontend.`;
  }

  if (q.match(/skills|stack|languages|tech|backend|frontend|database/)) {
    return `Sharvani's full technical stack:\n\n• Languages: Java, Python, JavaScript, SQL\n• Frontend: React.js, HTML5, CSS3, Bootstrap, Tailwind CSS\n• Backend: Node.js, Express.js, Django, REST APIs, Design Patterns\n• Databases: MongoDB, MySQL, SQLite\n• Concepts: RBAC, Clean Architecture, WebSockets, JWT Auth, MVC`;
  }

  if (q.match(/zorvyn|rbac|role.?based|access control/)) {
    return `Zorvyn is a secure backend system implementing Role-Based Access Control (RBAC) across 10+ API endpoints. Built with Node.js and Express.js following clean architecture design paradigms (separated service, controller, and repository layers), it includes middleware chains for token verification, role assertion, and request sanitization.`;
  }

  if (q.match(/currency|converter|exchange rate/)) {
    return `The Currency Converter is a client-side JavaScript web application with zero external dependencies. It processes real-time exchange rate tables across 150+ international currency assets with instant calculation on user input, featuring a responsive UI with currency flag indicators.`;
  }

  if (q.match(/certif/)) {
    return `Sharvani holds 3 certifications:\n1. FreeCodeCamp — Responsive Web Design\n2. Infosys Springboard — Python Fundamentals\n3. Edunet Foundation & TASK — Full Stack Web Development with AI Tools`;
  }

  if (q.match(/contact|email|phone|hire|reach/)) {
    return `You can reach Sharvani at:\n• Email: ${profileData.email}\n• Phone: ${profileData.phone}\n• Location: ${profileData.location}\n• GitHub: github.com/sharvani`;
  }

  if (q.match(/education|college|cgpa|gpa|degree/)) {
    return `Sharvani is pursuing B.Tech ECE at Malla Reddy College of Engineering for Women (Aug 2023 – May 2027), with a CGPA of 8.84/10 (Top 5%). Prior: Nano Junior College — Class XII, 95.5% (MPC). Jawahar Navodaya Vidyalaya, Khammam — CBSE Class X, 85.8%.`;
  }

  if (q.match(/dapper|orm|mysql|net core|dotnet|\\.net/)) {
    return `In the Smart E-Commerce research project, Sharvani uses Dapper micro-ORM with MySQL 8.0+ as the data access layer under a .NET Core 8.0 Web API Gateway. Dapper achieves < 45ms average query latency compared to ~180ms with Entity Framework Core — a 75% performance improvement via direct SQL execution without ORM overhead.`;
  }

  return `I'm Sharvani's portfolio AI agent. I can answer questions about:\n\n• Her background, education, and CGPA\n• Projects: UrbanBridge, DreamWorld, Zorvyn, Currency Converter\n• Research proposal: Smart E-Commerce with AI\n• Skills, stack, and certifications\n• SIH Hackathon leadership\n• Contact info\n\nTry: "Tell me about Sharvani", "What is UrbanBridge?", or "What are her skills?"`;
}

const SUGGESTIONS = [
  'Who is Sharvani?',
  'Tell me about her Internship',
  'Tell me about UrbanBridge',
  'What is her research?',
  'Show her skills',
  'SIH hackathon details',
];

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hello! I'm Sharvani's portfolio AI agent. Ask me anything about her background, projects, skills, or research proposal.",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const userMsg = text.trim();
    if (!userMsg) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      const response = getResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-96 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full bg-surface-800/95 backdrop-blur-xl border-l border-white/10 shadow-glass">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <Terminal size={14} className="text-primary-400" />
              </div>
              <div>
                <div className="font-mono text-sm text-white font-semibold">Portfolio AI Agent</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-400 animate-pulse" />
                  <span className="font-mono text-xs text-success-400">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 animate-slide-up ${
                  msg.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'bot'
                      ? 'bg-primary-500/20 border border-primary-500/30'
                      : 'bg-surface-400 border border-white/10'
                  }`}
                >
                  {msg.role === 'bot' ? (
                    <Bot size={12} className="text-primary-400" />
                  ) : (
                    <User size={12} className="text-slate-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-xs font-mono leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'bot'
                      ? 'bg-surface-600/60 text-slate-300 border border-white/5 rounded-tl-none'
                      : 'bg-primary-500/20 text-primary-200 border border-primary-500/20 rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                  <Bot size={12} className="text-primary-400" />
                </div>
                <div className="px-3 py-2 rounded-xl bg-surface-600/60 border border-white/5 rounded-tl-none">
                  <div className="flex items-center gap-1">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 pb-2 flex gap-1.5 overflow-x-auto">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => send(s)}
                className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-xs font-mono text-primary-400 hover:bg-primary-500/15 transition-colors"
              >
                <ChevronRight size={10} />
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-white/5"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Sharvani..."
              className="flex-1 bg-surface-600/50 border border-white/5 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="p-2 rounded-lg bg-primary-500/20 border border-primary-500/30 text-primary-400 hover:bg-primary-500/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
