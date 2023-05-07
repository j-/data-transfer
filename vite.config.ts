import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  base: '/data-transfer-report',
  build: { outDir: 'build' },
  plugins: [react()],
}));
