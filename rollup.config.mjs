import cssbundle from 'rollup-plugin-css-bundle';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/some.ts',
  output: {
    file: 'dist/some.js',
    format: 'cjs'
  },
  plugins: [cssbundle(), typescript()]
};