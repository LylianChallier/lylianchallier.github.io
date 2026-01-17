/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Palette Bleu Roi / Royal Blue
        royal: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4338ca',  // Bleu roi principal
          600: '#3730a3',  // Bleu royal profond
          700: '#312e81',
          800: '#1e1b4b',
          900: '#0f0d24',
        },
        // Couleurs papier (gris neutre)
        paper: {
          bg: '#e8e8e8',
          light: '#efefef',
          white: '#f8f8f8',
          dark: '#d8d8d8',
          warm: '#f0f0f0',
        },
        // Couleurs encre
        ink: {
          dark: '#1a1a2e',
          medium: '#3d3d5c',
          light: '#6b6b8a',
          muted: '#9ca3af',
        }
      },
      boxShadow: {
        'bento': '0 1px 3px rgba(67, 56, 202, 0.05), 0 10px 40px -10px rgba(67, 56, 202, 0.1)',
        'bento-hover': '0 4px 6px rgba(67, 56, 202, 0.08), 0 20px 50px -10px rgba(67, 56, 202, 0.15)',
        'royal': '0 4px 14px 0 rgba(67, 56, 202, 0.39)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
