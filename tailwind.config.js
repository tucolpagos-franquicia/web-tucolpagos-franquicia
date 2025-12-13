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
        brand: {
          orange: '#fd7203',      // Naranja principal
          yellow: '#fdbc02',      // Amarillo
          green: '#91c004',       // Verde claro
          darkGreen: '#058341',   // Verde oscuro
          darkerGreen: '#034a2a', // Verde más oscuro
        },
        primary: {
          DEFAULT: '#058341',     // Verde oscuro como primario
          dark: '#046a34',
          light: '#91c004',       // Verde claro
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#fd7203',     // Naranja como acento
          yellow: '#fdbc02',      // Amarillo
          dark: '#e66502',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

