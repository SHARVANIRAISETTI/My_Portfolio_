import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}

export function Modal({ isOpen, onClose, title, children, accentColor = '#0073ff' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative glass-modal max-w-lg w-full p-6 animate-slide-up max-h-[85vh] overflow-y-auto"
        style={{ borderColor: `${accentColor}30` }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
        />
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-white font-sans font-semibold text-lg leading-tight pr-4">{title}</h3>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors duration-150"
          >
            <X size={16} />
          </button>
        </div>
        <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
