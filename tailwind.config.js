/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        navBg:"#18181b",
        navIconHover:"#6b7280",
        navText:"#a1a1aa",
        navTextHover:"#f4f4f5",
        userCard:"#f1f5f9",
        userCardText1:"#1f2937",
        userCardText2:"#6b7280",
        userCardHover:"#c7d2fe",
        Icon:"#374151",
        Barbg:"#d4d4d8",
        sendText:"#a5b4fc",
        recieveText:"#e0e7ff",
      }
    },
  },
  plugins: [],
}

