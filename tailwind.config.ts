import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        'jmc-navy':       '#0D1B2A',
        'jmc-dark-green': '#166534',
        'jmc-green':      '#22C55E',
        // UI tokens
        'jmc-light':      '#F5F7FA',
        'jmc-dark':       '#334155',
        // Dark mode backgrounds
        'jmc-bg-dark':    '#0B1220',
        'jmc-card-dark':  '#111827',
      },
      fontFamily: {
        poppins:    ['Poppins',    ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backdropFilter: {
        glass: 'blur(10px) saturate(180%)',
      },
      animation: {
        'pulse':        'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      animationDelay: {
        '0':    '0s',
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config
