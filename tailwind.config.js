/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'orange': '#F37A1F',
      'grey': '#F5F5F5',
      'dark-grey': '#2C393F',
      'light-grey': '#596469',
    },
    extend: {},
  },
  plugins: [],
}

