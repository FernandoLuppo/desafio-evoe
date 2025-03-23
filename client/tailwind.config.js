module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "full-black": "#131414",
        "black-80": "#424343",
        "black-60": "#717272",
        "black-40": "#A0A1A1",
        "black-20": "#CFD0D0",
        "full-white": "#FFFFFF",
        "evoe-blue": "#2E329D",
        "evoe-yellow": "#febd0e",
        "evoe-red": "#ed1e23"
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"]
      },
      fontSize: {
        "evoe-xs": "0.75rem",
        "evoe-sm": "0.875rem",
        "evoe-md": "1rem",
        "evoe-lg": "1.125rem",
        "evoe-xl": "1.25rem",
        "evoe-2xl": "1.5rem",
        "evoe-3xl": "2rem"
      }
    }
  },
  plugins: []
}
