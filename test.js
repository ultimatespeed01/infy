document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  let cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
  
  let currentIndex = 0;
  
  function slide() {
    currentIndex++;
    if (currentIndex >= cards.length) {
      currentIndex = 0;
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      setTimeout(() => {
        track.style.transition = 'transform 0.1s ease';
      }, 50);
    } else {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }
  
  setInterval(slide, 1000); // Change slide every 3 seconds
});