/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e9f0f8',
          200: '#cfe0ef',
          300: '#a9c6df',
          400: '#7ea7cc',
          500: '#5c8fbf',
          600: '#4a78a4',
          700: '#3e6288',
          800: '#344f6e',
          900: '#2b415b',
          950: '#1a2837',
        },
        accent: {
          500: '#c98bb6',
          600: '#b674a3',
          700: '#9a5e8a',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #5c8fbf 0%, #6f79a8 50%, #b674a3 100%)',
        'brand-radial': 'radial-gradient(900px 540px at var(--x,50%) var(--y,40%), rgba(92,143,191,0.12), transparent 60%)',
      },
    },
  },
  plugins: [],
};
