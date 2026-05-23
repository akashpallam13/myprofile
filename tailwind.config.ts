import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 25%), radial-gradient(circle at 20% 15%, rgba(125, 211, 252, 0.1), transparent 18%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-250px 0' },
          '100%': { backgroundPosition: '250px 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
