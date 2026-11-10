/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // User Exact 5-Color Swatch Palette
        brand: {
          black: '#000000',    // #000000 - Pure Jet Black
          navy: '#14213d',     // #14213d - Deep Oxford Midnight Navy
          amber: '#fca311',    // #fca311 - Vibrant Industrial Amber / Safety Gold
          platinum: '#e5e5e5', // #e5e5e5 - Light Platinum Gray
          white: '#ffffff',    // #ffffff - Pure Crisp White
        },
        pis: {
          navy: {
            DEFAULT: '#14213d',
            dark: '#000000',
            light: '#1f2e4d',
          },
          amber: {
            DEFAULT: '#fca311',
            hover: '#e0910f',
            light: '#fdb541',
          },
          platinum: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
