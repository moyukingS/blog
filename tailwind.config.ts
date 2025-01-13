import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3388BB',
        tomori: '#77BBDD',
        anon: '#FF8899',
        rana: '#77DD77',
        soyo: '#FFDD88',
        taki: '#7777AA',
        sakiko: '#7799CC',
        wakaba: '#779977',
      },
    },
  },
  plugins: [],
} satisfies Config;
