import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff006e',
        secondary: '#16bac5',
        darkBg: '#1c2541',
        woodCol: '#A63D40',
        lightPink: '#EFE9F4',
        green: '#386150',
      },
    },
  },
  plugins: [],
};
export default config;
