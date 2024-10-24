import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': {
          'light': 'white',
          'dark': 'black'
        },
        'primary-text': {
          'light': 'black',
          'dark': 'white'
        },
        'secondary-text': {
          'light': '#797979',
          'dark': '#9b9b9b'
        },
        'highlight': {
          'primary': '#a746ee',
          'secondary': '#a846ee2f'
        }
      },
    },
  },
  plugins: [],
};
export default config;
