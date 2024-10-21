/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#D0021B',
        accent: '#F5A623',
        background: '#F7F7F7',
        text: '#333333',
        muted: '#B0B0B0',
        success: '#7ED321',
        warning: '#F8E71C',
        danger: '#D0021B',
      },
    },
  },
  plugins: [],
}