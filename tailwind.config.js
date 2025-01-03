/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--text)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--accent)',
              },
            },
            h1: { color: 'var(--text)' },
            h2: { color: 'var(--text)' },
            h3: { color: 'var(--text)' },
            h4: { color: 'var(--text)' },
            strong: { color: 'var(--text)' },
            code: { color: 'var(--text)' },
            blockquote: { color: 'var(--text)' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 