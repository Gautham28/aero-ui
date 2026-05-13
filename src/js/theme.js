// src/js/theme.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
  
    // 1. Check if the user previously saved a theme preference
    const savedTheme = localStorage.getItem('aero-theme');
  
    // 2. If saved, apply it. If not, check the OS system preference.
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.add('light');
    }
  
    // 3. Handle the button click
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
          htmlElement.classList.remove('dark');
          htmlElement.classList.add('light');
          localStorage.setItem('aero-theme', 'light');
        } else {
          htmlElement.classList.remove('light');
          htmlElement.classList.add('dark');
          localStorage.setItem('aero-theme', 'dark');
        }
      });
    }
  });