// vitest.config.ts
import { configDefaults } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./src/setupTests.ts"],
    exclude: [
      ...configDefaults.exclude,
      '**/node_modules/**',
      '**/dist/**',
    ],
    coverage: ({

      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      },

      exclude: [
        'src/components/**/index.ts',
        'src/components/**/index.tsx',
        'src/index.ts',
        '.storybook/',
        'src/stories/'
      ],
      reporter: ['lcov', 'html', 'text']
    }),
    environment: 'jsdom',
  },
});