import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-red': '#B44A49',
      'red': '#AB3534',
      'dark-red': '#79231E',
      'white': '#FFFFFF',
      'light-grey': '#FAFAFA',
      't-grey': '#D7D7D7',
      'h-grey': '#6C6C6C',
      'a-grey': '#AFAFAF',
      'dark-grey': '#2B2B2B',
      'black': '#000000',
    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
      title: ['Raliway', 'serif'],
    },
    fontSize: {
      sm: ['14px', {
        lineHeight: '20px',
      }],
      base: ['16px', {
        lineHeight: '24px',
      }],
      lg: ['20px', {
        lineHeight: '28px',
      }],
      xl: ['36px', {
        lineHeight: '44px',
      }],
      '2xl': ['44px', {
        lineHeight: '60px',
      }],
      '3xl': ['56px', {
        lineHeight: '72px',
      }],
    },
    extend: {
      maxWidth: {
        'c-full': '1290px',
      }
    },
  },
  plugins: [],
}
export default config
