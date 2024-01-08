import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red': '#AB3534',
      'dark-red': '#79231E',
      'light-red': '#B44A49',
      'bg': '#FAFAFA',
    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
      title: ['Raleway', 'serif'],
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
