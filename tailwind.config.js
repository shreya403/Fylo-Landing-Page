/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        DarkBlue1: "hsl(217, 28%, 15%)",
        DarkBlue2: "hsl(218, 28%, 13%)",
        DarkBlue3: "hsl(216, 53%, 9%)",
        DarkBlue4: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
