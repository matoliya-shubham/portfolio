/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "300px",
      // equal or above 0px - mobile
      // equal or above 480px - incl. larger smartphones
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px", // equal or above 640px - tablet
      // => @media (min-width: 640px) { ... }
      // equal or above 768px - laptop (incl large tablets, small desktops)
      md: "768px",
      // => @media (min-width: 768px) { ... }
      // equal or above 1024px - desktop (incl large laptop)
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      // equal or above 1280 - extra large screens
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        light: "url('src/assets/background-light.jpeg')",
        dark: "url('src/assets/background-dark.jpeg')",
      },
      margin: 0,
      padding: 0,
    },
  },
  plugins: [],
};
