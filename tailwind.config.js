/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        accent: {
          400: '#00d4ff',
          500: '#00b8d9',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
        },
        warning: {
          400: '#facc15',
          500: '#eab308',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
        },
        surface: {
          900: '#0a0e1a',
          800: '#0d1220',
          700: '#111827',
          600: '#1a2235',
          500: '#1e2a3d',
          400: '#243048',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'slide-right': 'slideRight 0.4s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'type-cursor': 'typeCursor 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideRight: { from: { opacity: '0', transform: 'translateX(100%)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 8px rgba(0,115,255,0.4)' }, '50%': { boxShadow: '0 0 24px rgba(0,115,255,0.8)' } },
        typeCursor: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        scanLine: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        glow: '0 0 20px rgba(0,115,255,0.3)',
        'glow-accent': '0 0 20px rgba(0,212,255,0.3)',
        glass: '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
