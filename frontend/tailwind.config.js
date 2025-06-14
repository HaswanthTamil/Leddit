/** @type {import('tailwindcss').Config} */

import lineClamp from "@tailwindcss/line-clamp"

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [lineClamp],
}

export default config
