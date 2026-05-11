/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // থিম চেঞ্জ করার জন্য এটি গুরুত্বপূর্ণ
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};