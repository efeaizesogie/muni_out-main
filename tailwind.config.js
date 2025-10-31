/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'general': ["general", 'sans-serif']
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideLeft100: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
        slideLeft200: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200px)" },
        }
      },
      animation: {
        "slide": 'slide 15s linear infinite',
        "slideLeft200": 'slideLeft200 1s ease-out forwards',
        "slideLeft100": 'slideLeft100 1s ease-out forwards'
      },
    },
  },
  plugins: [],
};
