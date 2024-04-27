/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('src/assets/background-light.jpeg')",
        dark: "url('src/assets/background-dark.jpeg')",
      },
    },
  },
  plugins: [],
};
