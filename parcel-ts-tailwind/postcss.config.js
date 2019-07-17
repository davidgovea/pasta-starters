module.exports = {
  plugins: {
    tailwindcss: 'tailwind.config.js',
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? { '@fullhuman/postcss-purgecss': true }
      : {}),
  },
};
