/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier Prime"', "monospace"],
      },
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        spinOnce: "spinOnce 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
