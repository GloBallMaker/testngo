/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Brighter, more energetic blue
        secondary: '#EC4899',
        cosmic: {
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 20px #4F46E5, 0 0 40px #4F46E5' },
          'to': { 'box-shadow': '0 0 30px #EC4899, 0 0 50px #EC4899' }
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #4F46E5, #EC4899)',
        'supernova': 'radial-gradient(circle at center, #4F46E5, #312E81)',
      }
    },
  },
  plugins: [],
}