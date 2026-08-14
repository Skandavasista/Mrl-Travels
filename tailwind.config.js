/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2A22",
        inkSoft: "#2A3A30",
        laterite: "#A6472B",
        lateriteDeep: "#8A3A22",
        nilgiri: "#3F6B4A",
        paper: "#EDEEE6",
        paperDeep: "#E3E4D9",
        amber: "#D99A2B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
