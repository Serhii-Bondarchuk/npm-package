import { defineConfig } from 'tsup'
import cssbundle from 'rollup-plugin-css-bundle';

export default defineConfig({
  loader: {
    '.css': 'css',
  },
  // bundle: true,
  // input: 'index.js',
  // output: {
  //   file: 'dist/index.js',
  //   format: 'cjs'
  // },
  // plugins: [cssbundle()],
})