/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-min-350": "repeat(auto-fit, minmax(350px, 1fr))",
        "auto-min-500": "repeat(auto-fit, minmax(500px, 1fr))",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "fade-out": "fade-out 0.5s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", scale: "0" },
          "100%": { opacity: "1", scale: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1", scale: "1" },
          "100%": { opacity: "0", scale: "0" },
        },
      },
      boxShadow: {
        "bottom-only": "0 15px 12px -15px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        'header': ' #4c5c64',
        'nav-bg': '#2C2F34',
        'btn-bg': '#4A4E54',
        'borde': '#B0B0B0',
        'btn-hover': '#6B6E72',
        'tarjeta': '#303336',
        'icon-active': '#EAEAEA',
        'icon-inactive': '#B0B0B0',
        'text-pri': '#EAEAEA',
        'text-sec': '#B0B0B0',
        
      },
      screens: {
        'xs': {'max': '639px'}, // Breakpoint personalizado para pantallas menores a 640px
      },
    },
  },
};
