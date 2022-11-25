/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#242323',
      white: '#FFF',

      background: '#18181B',
      bluesky: '#53D8FB',
      blueocean: '#66C3FF',
      whitecoffe: '#DCE1E9',
      pastelpink: '#D4AFB9',

      rose: '#F43F5E',
      rosee: '#FF7291',


      default: {
        DEFAULT: '#596172',
        600: '#373b45',
      },

      primary: {
        DEFAULT: '#17BEBB',
        600: '#108583',
      },

      secondary: {
        DEFAULT: '#25272E',
        600: '#32343d',
      },
      tertiary: '#E9DCC4',

      error: {
        DEFAULT: '#A71D31',
        600: '#7a1726',
      },

      info: '#4969B3',
    },
    fontFamily: {
      title: ['Josefin Sans', 'sans-serif'],
      text: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        vh: '8px 24px'
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px'
      },
      /*
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      */
    },
  },
  plugins: [],
}