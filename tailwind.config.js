/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#fd7203',
        'brand-yellow': '#fdbc02',
        'brand-green': '#91c004',
        'brand-darkGreen': '#058341',
        'brand-darkerGreen': '#034a2a',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


