/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '441': '441px',
        '739': '739px',
        '1512': '1512px',
      },
      height: {
        '585': '585px',
        '982': '982px',
      },
      backgroundImage: {
        'bgImage': "url('/bgimg.jpg')",
        'spaceMan': "url('/Space.jpg')",
        'liftOff': "url('/liftOff.jpg')"
      },
      backgroundSize: {
        '100%': '100%',
      },
    },
  },
  plugins: [],
}