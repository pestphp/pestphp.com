/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        // black: '#1e1e1e',
        gray: colors.zinc,
        green: {
          50: '#f7fefb',
          100: '#f0fdf7',
          200: '#d8f9eb',
          300: '#c1f5df',
          400: '#93eec6',
          DEFAULT: '#64e6ae',
          600: '#5acf9d',
          700: '#4bad83',
          800: '#3c8a68',
          900: '#317155'
        },
        // pink: {
        //   50: '#fef8fb',
        //   100: '#fef1f8',
        //   200: '#fcdced',
        //   300: '#fbc6e1',
        //   400: '#f79ccb',
        //   500: '#f471b5',
        //   600: '#dc66a3',
        //   700: '#b75588',
        //   800: '#92446d',
        //   900: '#783759'
        // },
        pink: {
          50: '#fff6fb',
          100: '#ffecf6',
          200: '#ffd1e9',
          300: '#ffb5db',
          400: '#ff7dc1',
          DEFAULT: '#ff45a6',
          600: '#e63e95',
          700: '#bf347d',
          800: '#992964',
          900: '#7d2251'
        },
        cyan: {
          50: '#f6fdff',
          100: '#edfbff',
          200: '#d3f4ff',
          300: '#b8eeff',
          400: '#83e1ff',
          DEFAULT: '#4ed4ff',
          600: '#46bfe6',
          700: '#3b9fbf',
          800: '#2f7f99',
          900: '#26687d'
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}
