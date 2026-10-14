/**
 * postcss.config.mjs
 *
 * Required for Tailwind CSS v4 + Next.js 16 Turbopack to process @theme
 * without the "Unknown at rule" warning from the internal PostCSS pass.
 *
 * @tailwindcss/postcss is bundled with the tailwindcss package — no extra install.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
