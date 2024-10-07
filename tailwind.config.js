/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-pink', 'bg-yellow', 'bg-grey', 'bg-red', 'bg-blue',
    'w-[10px]', 'w-[50px]', 'w-[60px]', 'w-[30px]', 'w-[90px]', 'w-[40px]', 'w-[20px]',
    'ml-6', 'ml-12', 'ml-4', 'ml-2', 'ml-8', // Add ml-* classes here
  ],
  theme: {
    colors: {
      pink: '#C678DD',
      yellow: '#E5C07B',
      grey: '#A6A9A9',
      red: '#E06C66',
      blue: '#5893B4',
      componentBackground: '#1d2a31',
    },
    extend: {
      keyframes: {
        'fly-in-from-bottom': {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fly-in-from-top': {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fly-in-from-bottom': 'fly-in-from-bottom 0.5s ease-out',
        'fly-in-from-top': 'fly-in-from-top 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};
