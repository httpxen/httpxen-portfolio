/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url("/cursors/fancy.cur"), auto',  // Replace with your file path and fallback (e.g., 'pointer' or 'auto')
        // Add more if needed, e.g., 'busy': 'url("/cursors/busy.cur"), wait',
      },
    },
  },
  plugins: [],
}