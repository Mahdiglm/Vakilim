import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'
import path from 'path'

// Custom plugin to handle SPA redirects for GitHub Pages
function spaRedirectPlugin() {
  return {
    name: 'spa-redirect-plugin',
    async closeBundle() {
      const distDir = path.resolve('dist');
      
      // Create .nojekyll to prevent GitHub Pages from using Jekyll processing
      await fs.writeFile(path.join(distDir, '.nojekyll'), '');
      
      // Copy index.html to 404.html (will be overwritten by our custom 404.html)
      await fs.copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
      
      // Ensure src directory exists
      const srcDir = path.join(distDir, 'src');
      try {
        await fs.mkdir(srcDir, { recursive: true });
      } catch (e) {
        // Directory may already exist
      }
      
      // Create redirect file for src/main.jsx
      const mainJsxRedirect = `// Redirect to root
window.location.href = window.location.origin + (window.location.pathname.includes('/Vakilim/') ? '/Vakilim/' : '/');`;
      
      await fs.writeFile(path.join(srcDir, 'main.jsx'), mainJsxRedirect);
      
      console.log('✓ SPA redirects for GitHub Pages created successfully');
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaRedirectPlugin()],
  base: './', // Use relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
