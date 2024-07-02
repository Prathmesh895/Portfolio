/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "fdark":'#343A46',
        "fdark1":'#16181d',
        "bdark":'#23272F',
        "txt":'#F6F7F9',
        "Footcol":'#061f24',
        "redtxt":'#e11d48',
        "green":'#5AFF80',
        "yellow":'#ffc107',
        "blue":'#007bff',
        "gold":"#ffd700",
        "pink1":"#c30cfa",
        "B7B7B7":"#B7B7B7",
        "#696969":"#696969"
     
       },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}