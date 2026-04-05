/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        bg: "#0F172A",
        surface: "#1E293B",
        border: "#334155",
        accent: "#22D3EE",
        "accent-dim": "#0891B2",
        muted: "#94A3B8",
        light: "#E2E8F0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
