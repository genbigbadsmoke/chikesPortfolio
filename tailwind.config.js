/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '3/4': '73%',
        '739': '739px',
        '1512': '1512px',
      },
      height: {
        '585': '585px',
        '982': '982px',
      }, 
      fontFamily: {
        'futura': 'futura',
      },
      bottom: {
        '2/3': '64.6%',
      },
      backgroundImage: {
        'bgImage': "url('/bgimg.jpg')",
        'spaceMan': "url('/Space.jpg')",
        'liftOff': "url('/liftOff.jpg')"
      },
      backgroundSize: {
        '100%': '100vw',
      },
    },
  },
  plugins: [],
}