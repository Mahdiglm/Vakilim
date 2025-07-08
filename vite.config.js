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
      
      // Copy index.html to 404.html for SPA routing
      await fs.copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
      
      // Create a special HTML file for handling direct access to main.jsx
      const srcDir = path.join(distDir, 'src');
      try {
        await fs.mkdir(srcDir, { recursive: true });
      } catch (e) {
        // Directory may already exist
      }
      
      // Create an HTML file that will redirect when accessed directly
      const redirectHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    window.location.href = window.location.origin + 
      (window.location.pathname.includes('/Vakilim/') ? '/Vakilim/' : '/');
  </script>
</head>
<body>
  <p>Redirecting to the main application...</p>
</body>
</html>`;
      
      await fs.writeFile(path.join(srcDir, 'main.jsx'), redirectHtml);
      
      console.log('✓ SPA redirects for GitHub Pages created successfully');
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaRedirectPlugin()],
  base: '/Vakilim/', // Use the correct base path for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
