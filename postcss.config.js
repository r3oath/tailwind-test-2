const whenProd = processor => process.env.NODE_ENV === 'production' && processor;

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './node_modules/next/**/*.js',
  ],
  defaultExtractor: content => (content.match(/[\w-/:%]+(?<!:)/g) || []),
});

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    whenProd(purgecss),
    whenProd(cssnano),
  ],
};
