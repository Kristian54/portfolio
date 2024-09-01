/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fly-in-from-bottom': {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fly-in-from-top': {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'fly-in-from-bottom': 'fly-in-from-bottom 0.5s ease-out',
        'fly-in-from-top': 'fly-in-from-top 0.5s ease-out',
      }
    },
  },
  plugins: [],
}

