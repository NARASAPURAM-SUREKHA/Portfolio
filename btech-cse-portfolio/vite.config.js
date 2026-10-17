import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project repositories, set VITE_BASE=/repository-name/ before building.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
