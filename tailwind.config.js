/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"] ,
  theme: {
    fontFamily: {
      primary: 'Oxanium, cursive',
      secondary: 'Poppins, sans-serif',
    },

    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        body: 'black',
        white: '#fff',
        pink: 'pink',
        thBlue: "#35EEED",
        thOrange: "#F9A23F",
        thPurple: "#ED02FF",
        transparent: 'transparent',
        eerie: "#1B1320"
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        radialBgCircle: "url('/src/assets/img/radial-bg.svg')",
        videoBg: "url('/src/assets/img/video-bg.png')",
        circle: "url('/src/assets/img/circle.png')",
        explore: "url('/src/assets/img/explore.png')",
        flower: "url('/src/images/section-wrapper-bg.png')",
      },
    

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
