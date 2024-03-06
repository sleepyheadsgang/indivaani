/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      textColor: {
        DEFAULT: 'var(--text-default)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        alt: 'var(--text-alt)',
      }
    },
  },
  plugins: [],
}

