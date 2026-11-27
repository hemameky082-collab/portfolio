/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        acc: 'rgb(var(--acc) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        dot: {
          '0%, 60%, 100%': { transform: 'none', opacity: '0.5' },
          '30%': { transform: 'translateY(-4px)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 0.8s steps(1) infinite',
        dot: 'dot 1s infinite',
      },
    },
  },
  plugins: [],
}
