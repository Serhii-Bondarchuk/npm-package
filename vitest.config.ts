// vitest.config.ts
import { configDefaults } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {

    exclude: [
      ...configDefaults.exclude,
      '**/node_modules/**',
      '**/dist/**',
    ],
    coverage: ({
      exclude: [
        'src/components/**/index.ts',
        'src/index.ts',
      ],
      reporter: ['lcov', 'html', 'text']
    }),
  },
});