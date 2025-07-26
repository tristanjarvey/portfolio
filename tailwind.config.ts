/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          dark: '#171717',
          gold: '#FFD700',
          interactive: 'hsl(var(--interactive))',
          neutral: {
            300: '#d4d4d8',
            400: '#a3a3a8',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  