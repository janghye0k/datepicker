import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssCustomProperties from 'postcss-custom-properties';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    postcssImport,
    postcssPresetEnv({
      autoprefixer: { grid: 'autoplace' },
      browsers: '> 0.3%, defaults, not IE < 11',
    }),
    postcssCustomProperties(),
    autoprefixer,
    cssnano,
  ],
};

export default config;