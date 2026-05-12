document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('[data-dialog-target]');
    const closers = document.querySelectorAll('[data-dialog-close]');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.getAttribute('data-dialog-target');
        const dialog = document.getElementById(targetId);
        if (dialog) dialog.showModal();
      });
    });
  
    closers.forEach(closer => {
      closer.addEventListener('click', () => {
        const dialog = closer.closest('.aero-dialog');
        if (dialog) dialog.close();
      });
    });
  });