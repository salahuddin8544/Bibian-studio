/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'facebook': '#3b5999',
      'messenger': '#0084ff',
      'twitter': '#55acee',
      'instagram': '#e4405f',
      'linkedin': '#0077b5',
      'gray':'#0f172a',
      'white':'#FFFFFF',
      'black':'#000000',
      'grey':'#252525',
      'grey2':'#545454',
      'grey3':'#A2A0A0'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

