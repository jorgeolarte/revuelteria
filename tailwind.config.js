const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "main-hero": "url('/images/bg-login.jpg')",
        admin: "url('/images/bg-admin-blur.webp')",
        "landing-page": "url('/images/bg-landing-page.webp')",
        "what-we-do": "url('/images/whatWeDo.webp')",
      }),
      colors: {
        primary: "#128C7E",
        secondary: "#075E54",
        success: "#25D366",
        danger: "#E50914",
        warning: "#FBB034",
        info: "#34B7F1",
        light: "#ECE5DD",
        dark: "#212529",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Dancing Script", "cursive"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    outline: false,
  },
};
