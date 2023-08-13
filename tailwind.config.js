/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fade-bottom': 'linear-gradient(to top, rgb(37, 150, 190) 0%, transparent 100%)'
      }),
      colors: {
        light: '#F4DDB3',
        lighter: '#FCF7ED',
        dark: '#1f2937', 
        darker: '#09090b',
        primary: '#FF9800', // Orange
        secondary: '#4CAF50', // Green
        accent: '#F44336', // Red
        background: '#FDF1E7', // Creamy off-white
        text: '#4A4A4A', // Dark gray text
      }
    },
    fontFamily: {
      retro: ['VT323', 'monospace']
    }, 
    // fontSize: {
    //   'sm': '0.875rem', // Small font size
    //   'base': '1rem', // Base font size
    //   'lg': '1.125rem', // Large font size
    // }
  },
  plugins: [],
}

