module.exports = {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.svg',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  extractors: [
    {
      extensions: ['html', 'svg', 'js', 'jsx', 'ts', 'tsx'],
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
    },
  ],
};
