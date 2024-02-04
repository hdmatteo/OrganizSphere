/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Mountains': "url('src/assets/Mountains.jpg')",
      }
    },
  },
  plugins: [require("daisyui",'@tailwindcss/forms')],
}
