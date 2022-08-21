/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        't-btn-primary': 'var(--text-btn-primary-color)',
      },
    },
  },
  plugins: [],
}
