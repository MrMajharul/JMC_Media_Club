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
        'jmc-green': '#8BCF00',
        'jmc-orange': '#FF8A3D',
        'jmc-navy': '#081420',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backdropFilter: {
        glass: 'blur(10px) saturate(180%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config
