/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'mono': ['"Ubuntu Mono"', 'ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['cmyk'],
  },
};

