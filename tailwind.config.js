module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1a2a6c',
        'royal-blue': '#0c3483',
        'navy': '#000046',
      },
      animation: {
        'float': 'float 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

