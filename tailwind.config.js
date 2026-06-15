/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // blue
        dark: "#0F172A", // navy dark
        light: "#F8FAFC", // soft white
        accent: "#22C55E", // green highlight
      },
    },
  },
  plugins: [],
};
