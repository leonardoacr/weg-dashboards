/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      colors: {
        'background-page': '#f2f7fa',
        'background-header': '#0a1f4d',
        'background-dashboard': 'white',
        'label-color': '#636365',
        'weg-blue': '#0090c5',
      },
    },
  },
  plugins: [],
}