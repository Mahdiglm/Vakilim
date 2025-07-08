// This file handles redirects when users access /src/main.jsx directly
// Redirect to the root of the application
window.location.href = window.location.origin + 
  (window.location.pathname.includes('/Vakilim/') ? '/Vakilim/' : '/'); 