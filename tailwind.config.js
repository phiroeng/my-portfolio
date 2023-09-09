/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"],
        ArchivoBlack: ["Archivo Black"],
        NunitoSans: ["Nunito Sans"],
        Poppinsss: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
};
