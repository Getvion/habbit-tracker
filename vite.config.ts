import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@common/*': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils/api': path.resolve(__dirname, './src/utils/api'),
      '@utils/firebase': path.resolve(__dirname, './src/utils/firebase'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@utils/contexts': path.resolve(__dirname, './src/utils/contexts'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@features': path.resolve(__dirname, './src/features'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
});
