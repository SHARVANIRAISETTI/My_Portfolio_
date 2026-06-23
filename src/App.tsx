import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ResearchLab } from './components/ResearchLab';
import { LeetCodeTracker } from './components/LeetCodeTracker';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface-900 text-slate-200">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ResearchLab />
        <LeetCodeTracker />
      </main>

      <Footer />

      {/* Chatbot */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating launcher */}
      <button
        onClick={() => setIsChatOpen(v => !v)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-mono text-sm font-semibold shadow-glass transition-all duration-300 ${
          isChatOpen
            ? 'bg-surface-600 border border-white/10 text-slate-300 hover:text-white'
            : 'bg-primary-500 hover:bg-primary-600 text-white shadow-glow animate-pulse-glow'
        }`}
      >
        {isChatOpen ? (
          <>
            <X size={15} />
            Close
          </>
        ) : (
          <>
            <MessageSquare size={15} />
            Ask AI Agent
          </>
        )}
      </button>
    </div>
  );
}

export default App;
