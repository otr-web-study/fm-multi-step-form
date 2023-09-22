/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
      },
      fontFamily: {
        ubuntu: [
          'Ubuntu',
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'panel-mobile': 'url("/assets/images/bg-sidebar-mobile.svg")',
        'panel-desktop': 'url("/assets/images/bg-sidebar-desktop.svg")',
        'icon-checkmark': 'url("/assets/images/icon-checkmark.svg")',
      },
      boxShadow: {
        'base-sh': '0px 7px 15px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
