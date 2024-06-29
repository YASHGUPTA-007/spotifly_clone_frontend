document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const mainContent = document.querySelector('.main-content');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        mainContent.style.background = 'linear-gradient(to bottom, #00ff00 0%, #32cd32 50%, #006400 100%)';
      });
  
      card.addEventListener('mouseleave', function() {
        mainContent.style.background = ''; // Reset background
      });
    });
  });
  