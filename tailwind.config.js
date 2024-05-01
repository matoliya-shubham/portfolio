/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: { max: "300px" },
      // equal or below 0px - mobile
      // equal or below 480px - incl. larger smartphones
      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
      sm: { max: "640px" }, // equal or below 640px - tablet
      // => @media (max-width: 640px) { ... }
      // equal or below 768px - laptop (incl large tablets, small desktops)
      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }
      // equal or below 1024px - desktop (incl large laptop)
      tab: { max: "868px", min: "769px" },
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      // equal or below 1280 - extra large screens
      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
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
