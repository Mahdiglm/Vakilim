import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // Custom plugin to copy index.html to 404.html after build
    {
      name: 'copy-404-file',
      closeBundle: async () => {
        // Copy index.html to 404.html for GitHub Pages SPA support
        await fs.promises.copyFile('./dist/index.html', './dist/404.html');
        // Create .nojekyll file to prevent GitHub Pages from using Jekyll
        await fs.promises.writeFile('./dist/.nojekyll', '');
        // Create a redirect at /src/main.jsx to avoid 404
        if (!fs.existsSync('./dist/src')) {
          await fs.promises.mkdir('./dist/src', { recursive: true });
        }
        await fs.promises.writeFile('./dist/src/main.jsx', 
          `// Redirect to main app\nwindow.location.href = "/Vakilim/";`);
      }
    }
  ],
  base: '/Vakilim/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
