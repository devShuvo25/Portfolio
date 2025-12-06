/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo 500 - Electric Blue-ish
        secondary: "#ec4899", // Pink 500 - Sunset
        dark: {
          900: "#0f172a", // Slate 900 - Deepest background
          800: "#1e293b", // Slate 800 - Section background
          700: "#334155", // Slate 700 - Card background
        },
        light: {
          100: "#f1f5f9", // Slate 100 - Main text
          200: "#e2e8f0", // Slate 200 - Secondary text
          300: "#cbd5e1", // Slate 300 - Muted text
        }
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero-bg.svg')", // Placeholder if needed
      }
    },
  },
  plugins: [],
}
