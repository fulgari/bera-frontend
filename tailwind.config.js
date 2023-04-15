const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.tsx",
    './public/index.html',
    // './src/pages/**/*.{html,tsx}',
    // './src/components/**/*.{html,tsx}',
    // './src/layout/**/*.{html,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px rgba(0,0,0,.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,.05)',
        lg: '0 8px 16px rgba(0,0,0,.05)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value
        })
      },
      { values: theme('textShadow')})
    })
  ],
};
