/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FFB700',
        'secondary':'#1760A6',
        'tertiary':'#273044',
        
      },
      backgroundImage: {
        'custom-background': "url('images/bg.webp')",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
      },
      // backgroundImage: {
      //   'yellow-gradient': 'linear-gradient(180deg, rgba(255, 255, 0, 0.5), rgba(255, 255, 0, 0))',
      // }
      backgroundImage: {
        'orange-gradient': 'linear-gradient(180deg, rgba(255, 165, 0, 0.5), rgba(255, 165, 0, 0))',
      }
    },
  },
  
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.tap-highlight-transparent': {
            '-webkit-tap-highlight-color': 'transparent',
          },
        };
  
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
    ],
}

