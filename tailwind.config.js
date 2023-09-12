/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#0fc4b2",
      
"secondary": "#3561a3",
      
"accent": "#3969a8",
      
"neutral": "#1e1c22",
      
"base-100": "#e8e8e8",
      
"info": "#58b6d0",
      
"success": "#0f6b4c",
      
"warning": "#f5c856",
      
"error": "#f8306f",
      },
    },
  ],
  plugins: [require("daisyui")],
}

