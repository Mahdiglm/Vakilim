// Redirect script for main.jsx
// This file is accessed directly by the browser when a user tries to access /src/main.jsx
// We redirect to the root of the application
window.location.href = window.location.origin + 
  (window.location.pathname.includes('/Vakilim/') ? '/Vakilim/' : '/'); 