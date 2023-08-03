// Get references to the parallax images
const img = document.querySelector('.img');
const img2 = document.querySelector('.img2');
const parallaxImage0201 = document.querySelectorAll('.parallax-img-02-01');
const parallaxImage0202 = document.querySelectorAll('.parallax-img-02-02');


// Add an event listener to the window's scroll event
window.addEventListener('scroll', function() {
  // Get the scroll position and viewport height
  const value = window.scrollY;
  
  img.style.bottom = value * .1 + 'vh'; 
  img2.style.top = value * -.1 + 'vh';
  parallaxImage0201.style.marginTop = value * 2 + 'px';
  parallaxImage0202.style.marginTop = value * 2 + 'px';
  
});
