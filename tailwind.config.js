/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
          'button-muted-hover': 'rgba(var(--color-button-muted-hover) / 0.85)',
        },
      },
      transitionDuration: {
        DEFAULT: 'var(--theme-change-transition-duration)',
        hover: 'var(--hover-transition-duration)',
      },
    },
  },
  plugins: [],
};
