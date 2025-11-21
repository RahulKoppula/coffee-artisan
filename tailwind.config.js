/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          primary: '#D4A574',
          secondary: '#E8D5C4',
          accent: '#C9A9A6',
          background: '#F5F1EB',
          text: '#5C4A3A',
          success: '#A8C5A0',
          warning: '#F4C2A1',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

