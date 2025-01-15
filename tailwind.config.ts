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
        primary: {
          '50': '#f3f7fc',
          '100': '#e5f0f9',
          '200': '#c6dff1',
          '300': '#94c6e5',
          '400': '#5aa8d6',
          DEFAULT: '#3388bb',
          '600': '#2571a4',
          '700': '#1f5a85',
          '800': '#1d4d6f',
          '900': '#1d415d',
          '950': '#142a3d',
        },
        tomori: {
          '50': '#f3f8fc',
          '100': '#e5f0f9',
          '200': '#c6e1f1',
          '300': '#94c9e5',
          DEFAULT: '#77bbdd',
          '500': '#3592c2',
          '600': '#2576a4',
          '700': '#1f5e85',
          '800': '#1d506f',
          '900': '#1d435d',
          '950': '#142c3d',
        },
        anon: {
          '50': '#fff1f2',
          '100': '#ffe3e6',
          '200': '#ffccd3',
          DEFAULT: '#ff8899',
          '400': '#fe6e86',
          '500': '#f83b5f',
          '600': '#e5194a',
          '700': '#c20e3d',
          '800': '#a20f3b',
          '900': '#8b1038',
          '950': '#4e0319',
        },
        rana: {
          '50': '#f1fcf1',
          '100': '#dff9df',
          '200': '#c3f0c2',
          DEFAULT: '#77dd77',
          '400': '#5ace5a',
          '500': '#34b335',
          '600': '#259426',
          '700': '#217422',
          '800': '#1f5c20',
          '900': '#1b4c1c',
          '950': '#092a0b',
        },
        soyo: {
          '50': '#fff9eb',
          '100': '#ffefc6',
          DEFAULT: '#ffdd88',
          '300': '#ffc54a',
          '400': '#ffae20',
          '500': '#f98a07',
          '600': '#dd6402',
          '700': '#b74406',
          '800': '#94330c',
          '900': '#7a2b0d',
          '950': '#461402',
        },
        taki: {
          '50': '#f4f5f9',
          '100': '#ebeef4',
          '200': '#dadeeb',
          '300': '#c3cade',
          '400': '#aab0cf',
          '500': '#9497c0',
          DEFAULT: '#7777aa',
          '700': '#6c6b97',
          '800': '#58587b',
          '900': '#4b4b64',
          '950': '#2c2c3a',
        },
        sakiko: {
          '50': '#f3f7fb',
          '100': '#e4ebf5',
          '200': '#cfdeee',
          '300': '#aec8e2',
          '400': '#87abd3',
          DEFAULT: '#7799cc',
          '600': '#5778b9',
          '700': '#4c66a9',
          '800': '#42548b',
          '900': '#39486f',
          '950': '#262e45',
        },
        wakaba: {
          '50': '#f3f6f3',
          '100': '#e3eae1',
          '200': '#c6d5c5',
          '300': '#9eb89d',
          DEFAULT: '#779977',
          '500': '#527753',
          '600': '#3d5e3f',
          '700': '#314b33',
          '800': '#293c2b',
          '900': '#223224',
          '950': '#121c13',
        },
      },
      keyframes: {
        scroll_line: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(0)' },
          '90%, 100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll_line: 'scroll_line 3s cubic-bezier(0.87, 0, 0.13, 1) infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(from|to|bg)-(primary|tomori|anon|rana|soyo|taki|sakiko|wakaba)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
} satisfies Config;
