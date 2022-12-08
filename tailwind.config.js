module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sky': "url('public/backgrounds/loginBackground.jpg')",
        'base': "url('public/backgrounds/base.png')",
        'greensky': "url('public/backgrounds/greensky.jpg')",
        'bluesky': "url('public/backgrounds/bluesky.jpg')",
        'register': "url('public/backgrounds/register.jpg')",

      }
    }
  },
  variants: {},
  plugins: []
};