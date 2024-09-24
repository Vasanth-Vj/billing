/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        SfPro: ['"SF Pro Display"', 'sans-serif'],
      },
      boxShadow: {
        'custom-normal': '0px 4px 30px 0px rgba(26, 28, 33, 0.05)',
      },
    },
  },
  plugins: [],
}

