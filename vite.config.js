import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Social-media/',  // This should match the repository name for GitHub Pages
  build: {
    outDir: 'dist', // Ensure this matches your deploy script
  },
});
