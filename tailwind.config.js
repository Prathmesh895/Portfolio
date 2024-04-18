// tailwind.config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
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
       "B7B7B7":"#B7B7B7"
    
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Adjust duration as needed
      },
      height: {
        'h': '34rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
