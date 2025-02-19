import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-900": "#001000",
        "green-800": "#002a00",
        "green-600": "#1c631c",
        "green-400": "#028c0d",
        "green-200": "#00ff00",
        "black-900": "#000000",
        "black-800": "#121212",
        "black-600": "#1e1e1e",
        "black-500": "#2d2d2d",
        "black-400": "#3c3c3c",
        "black-200": "#494a4a",
        "light-500": "#f0f0f0",
        "gray-600": "#202325",
        "yellow-400": "#d4ff80",
      },
      boxShadow: {
        "bottom-black-shadow": "6px 6px 6px 0 #09090980",
        "top-gray-shadow": "-4px -4px 6px 0 #494a4a80",
        "top-green-shadow": "-2px -4px 12px 0 #286f1680",
        "green-shadow": "0px 0px 16px 3px #286f1680",
        "bottom-green-shadow": "0px 10px 10px 0 #286f1680",
        "newPost-green-shadow": "0px 0px 16px 0 #effffe80",
      },
    },
  },
  plugins: [],
} satisfies Config;
