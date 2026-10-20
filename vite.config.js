import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['use-form-state'],
  },
  build: {
    outDir: 'build',
  },
});
