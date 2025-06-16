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
          dark: '#0f0f0f',
          gold: '#FFD700',
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  