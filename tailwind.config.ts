import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lavander: '#D1C4E9',
        lightgray: '#BDBDBD',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        tangerine: ['var(--font-tangerine)', 'sans-serif'],
        parisienne: ['var(--font-parisienne)', 'sans-serif'],
        cookie: ['var(--font-cookie)', 'sans-serif'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #FF7E5F, #FEB47B)',
      },
    },
  },
  plugins: [],
};

export default config;
