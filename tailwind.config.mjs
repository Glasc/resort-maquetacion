/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#DAF0FB",
        "primary-200": "#98C8F0",
        "primary-300": "#1B539D",
        "primary-400": "#081D4F",
        "primary-500": "#01051E",
        "secondary-100": "#F7B6A6",
        "secondary-200": "#DC3728",
        "secondary-300": "#750800",
        "gray-100": "#F1F4F9",
        "gray-200": "#D1D9E6",
        "gray-300": "#97A4BA",
        "gray-400": "#67748E",
        "gray-500": "#4C5467",
        "gray-600": "#363C49",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
